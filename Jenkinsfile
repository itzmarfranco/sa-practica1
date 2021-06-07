pipeline {
    agent any

    stages {
        stage ('build'){
            steps{
                echo "npm run build"
            }
        }
        stage ('test'){
            steps{
                echo "npm run test"
            }
        }
        stage ('deploy'){
            steps{
                echo "Deploying to the cloud..."
            }
        }
    }
}
