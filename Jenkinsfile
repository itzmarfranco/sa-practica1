pipeline {
    agent any

    stages {
        stage ('install'){
            steps{
                bat "npm install"
            }
        }
        stage ('test'){
            steps{
                bat "npm run test"
            }
        }
        stage ('deploy'){
            steps{
                echo "Deploying to the cloud..."
            }
        }
    }
    post {
        failure {
            echo "Error ocurred. Not deploying"
        }
        success{
            bat "fab backend"
        }
    }
}
