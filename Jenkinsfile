pipeline {
    agent any

    options {
        timestamps()
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
            echo 'Initial Jenkins pipeline completed successfully!'
        }

        failure {
            echo 'Jenkins pipeline failed. Check the console output.'
        }
    }
}