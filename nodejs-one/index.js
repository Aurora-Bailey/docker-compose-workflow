const Server = require('./components/Server')
const server = new Server({ port: process.env.NODEJS_ONE_PORT })

server.start().catch(console.error)
