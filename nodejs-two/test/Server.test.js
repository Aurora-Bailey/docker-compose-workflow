const Server = require('../components/Server')
const server = new Server({ port: process.env.NODEJS_TWO_PORT })

test('basic testing enabled', async () => {
	expect(server.testTrue()).toBe(true)
	expect(await server.testTrueAsync()).toBe(true)
})
