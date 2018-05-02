import autoBind from 'auto-bind'

class StreamController {
	constructor({streamRepository}) {
		this.streamRepository = streamRepository
		autoBind(this)
	}

	get(req, res) {
		this.streamRepository.execute(res)
	}
}

export default StreamController