
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
    }

    post {
        success {
            echo 'Sintu Decorators CI and security scan completed!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
