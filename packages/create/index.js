const path = require('path')
class CreateCommand {
    constructor(options) {
        this.options = options
        this.rootPath = path.resolve()
    }
    async execute() {
        console.info('init git')
    }
}

function factory(argv) {
    new CreateCommand(argv).execute()
}

module.exports = factory