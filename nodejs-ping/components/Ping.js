const axios = require('axios')

class Ping {
	constructor(){}

	async start() {
		this.next().catch(console.log)
	}

	async next() {

		console.log("ping")

		await axios.get("http://nodejs-one:3000")

		setTimeout(()=>{
			this.next().catch(console.log)
		}, 10000)
	}

	testTrue() {
		return true
	}

	async testTrueAsync() {
		return true
	}
}

module.exports = Ping
