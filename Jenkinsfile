
pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    stages {

        stage('Checkout Verification') {
            steps {
                echo 'Checking out Sintu Decorators source code...'
                sh 'pwd'
                sh 'ls -la'
                sh 'git rev-parse --short HEAD'
            }
        }

        stage('Project Structure') {
            steps {
                echo 'Checking project directories...'
                sh 'test -d client && echo "Frontend directory found"'
                sh 'test -d server && echo "Backend directory found"'
            }
        }

        stage('Trivy Filesystem Security Scan') {
            steps {
                echo 'Scanning project for vulnerabilities, secrets and misconfigurations...'

                sh '''
                    trivy fs \
                    --scanners vuln,secret,misconfig \
                    --severity HIGH,CRITICAL \
                    --exit-code 1 \
                    .
                '''
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying Sintu Decorators to AWS EC2...'

                sh '''
                    ssh \
                    -i /var/jenkins_home/.ssh/sintu_deploy_key \
                    -o BatchMode=yes \
                    -o IdentitiesOnly=yes \
                    -o StrictHostKeyChecking=yes \
                    -o ConnectTimeout=10 \
                    deploy@172.17.0.1 \
                    "sudo /usr/local/bin/deploy-sintu.sh"
                '''
            }
        }
    }

    post {
        success {
            echo 'Sintu Decorators CI/CD pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
