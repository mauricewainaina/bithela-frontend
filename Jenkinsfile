pipeline {
	agent {
		label 'master'
	}
		
	stages {

        stage('PULLING CHANGES') {
			steps {
				sh '''
				sudo su
				cd /home/julius/bithela-project/bithela
				sudo git pull 
				'''
			}
		}

		stage('BUILDING STAGE') {
			steps {
				sh '''
				sudo su
				cd /home/julius/bithela-project/bithela
				sudo npm i
				'''
			}
		}

		stage('DEPLOYING STAGE') {
			steps {
				sh '''
				sudo su 
				cd /home/julius/bithela-project/bithela
				sudo npm run build
                sudo nohup serve -s build -l 2030 &
				'''
			}


		}
}
}

