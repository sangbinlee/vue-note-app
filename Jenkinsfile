@ -1,103 +1,104 @@
pipeline {
    agent any

    environment {
        PROJECT_NAME = "vue-note-app"
        WORKSPACE = "/var/lib/jenkins/workspace/"
        LOG_PATH ="${env.WORKSPACE}${env.PROJECT_NAME}"
        // TEST_PREFIX = "test-IMAGE"
        // TEST_IMAGE = "${env.TEST_PREFIX}:${env.BUILD_NUMBER}"
        // TEST_CONTAINER = "${env.TEST_PREFIX}-${env.BUILD_NUMBER}"
        // REGISTRY_ADDRESS = "my.registry.address.com"

        // SLACK_CHANNEL = "#deployment-notifications"
        // SLACK_TEAM_DOMAIN = "MY-SLACK-TEAM"
        // SLACK_TOKEN = credentials("slack_token")
        // DEPLOY_URL = "https://deployment.example.com/"

        // COMPOSE_FILE = "docker-compose.yml"
        // REGISTRY_AUTH = credentials("docker-registry")
        // STACK_PREFIX = "my-project-stack-name"
    }


    stages { 
        stage('■■■■Build && Deploy  @@@222 생겨서 함침') {
            steps {
                echo '■Deploying....start...'
                sh '''
                    pwd
                    ll
                    echo '■ npm install'
                    npm install
                    echo '■ npm run build'
                    npm run build 
                    '''
                    // BUILD_ID=dontKillMe nohup java -jar /var/lib/jenkins/workspace/board9/build/libs/board9-0.0.1-SNAPSHOT.jar &
                    // BUILD_ID=dontKillMe nohup java -jar /var/lib/jenkins/workspace/board9@2/build/libs/board9-0.0.1-SNAPSHOT.jar >> nohup.out 2>&1 &
                    //BUILD_ID=dontKillMe nohup java -jar ${env.LOG_PATH}@2/build/libs/${env.PROJECT_NAME}-0.0.1-SNAPSHOT.jar >> ${env.LOG_PATH}@2/build/libs/nohup.out 2>&1 &
                echo "■Deploying 성공 !!"
            }
        }
    }
}
