// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

class Server {
	constructor({ port = 5000 }) {
		this.port = port
	}

	async declareRoutes() {
		// Declare a route
		fastify.get('/', async (request, reply) => {
			return { hello: 'world', env: process.env.NODE_ENV }
		})
	}

	async start() {
		try {
			await this.declareRoutes()
			await fastify.listen(this.port, '0.0.0.0')
		} catch (err) {
			fastify.log.error(err)
			process.exit(1)
		}
	}

	testTrue() {
		return true
	}

    async testTrueAsync() {
		return true
	}
}

module.exports = Server
