const Ping = require('./components/Ping')
const ping = new Ping()

ping.start().catch(console.error)
