pipeline {
    agent any
 
    environment {
        // NODE_ENV = 'development'
        // NODE_ENV = 'production'
        PROJECT_NAME = "vue-note-app"
        BUILD_ID = 'dontKillMe' // Jenkins의 ProcessTreeKiller 방지
        // JENKINS_NODE_COOKIE = 'dontKillMe' // Jenkins의 ProcessTreeKiller 방지
        // PM2_HOME = '/var/lib/jenkins/.pm2'
    }
    stages { 
        stage('■■■■Build && Deploy  @@@222 생겨서 함침') {
            steps {
                echo '■Deploying....start...'

                sh '''
                    pwd
                    ls -alt
                    echo '■ npm install'
                    npm install
                    echo '■ npm run build'
                    npm run build
                    echo '■ npm run preview' 
                    pm2 restart vue3 || pm2 start "npm run preview" --name vue3
                    '''
                    // BUILD_ID=dontKillMe nohup java -jar /var/lib/jenkins/workspace/board9/build/libs/board9-0.0.1-SNAPSHOT.jar &
                    // BUILD_ID=dontKillMe nohup java -jar /var/lib/jenkins/workspace/board9@2/build/libs/board9-0.0.1-SNAPSHOT.jar >> nohup.out 2>&1 &
                    //BUILD_ID=dontKillMe nohup java -jar ${env.LOG_PATH}@2/build/libs/${env.PROJECT_NAME}-0.0.1-SNAPSHOT.jar >> ${env.LOG_PATH}@2/build/libs/nohup.out 2>&1 &
                echo "■Deploying 성공 !!"
            }
        }
    }
}
