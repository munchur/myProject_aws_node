module.exports = {
    apps: [{
        name: 'myProject_aws_node',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-18-220-176-227.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/myProject.pem.txt',
            ref: 'origin/master',
            repo: 'git@github.com:munchur/myProject_aws_node.git',
            path: '/home/ubuntu/myProject_aws_node',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}
