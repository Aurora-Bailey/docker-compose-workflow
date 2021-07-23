const Server = require('./components/Server')
const server = new Server({ port: process.env.NODEJS_TWO_PORT })

server.start().catch(console.error)
