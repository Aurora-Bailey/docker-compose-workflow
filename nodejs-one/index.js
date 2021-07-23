const Server = require('./components/Server')
const server = new Server({ port: process.env.NODE_PORT })

server.start().catch(console.error)
