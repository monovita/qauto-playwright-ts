pipeline {
    agent any 
    environment {
        PATH = "/usr/local/bin/docker"
    }
    tools {
        nodejs 'NodeJS' 
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                sh 'npx playwright test --grep-invert "registrationPositiveTests"'
            }
        }
        stage('Report') {
            steps {
                publishHTML([ 
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}