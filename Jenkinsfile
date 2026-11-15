
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
    }

    post {
        success {
            echo 'Sintu Decorators CI pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
