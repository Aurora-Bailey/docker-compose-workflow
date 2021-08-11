const Ping = require('../components/Ping')
const ping = new Ping()

test('basic testing enabled', async () => {
	expect(ping.testTrue()).toBe(true)
	expect(await ping.testTrueAsync()).toBe(true)
})
