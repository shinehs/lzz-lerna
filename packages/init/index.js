const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')
class InitCommand {
    constructor(options) {
        this.options = options
        this.rootPath = path.resolve()
    }
    async execute() {
        console.info('init git')
        // await execa('git', ['init'], {
        //     stdio: 'pipe'
        // })
        // await ensurePackageJSON()
        // await ensureLzzConfig()
        // await ensureSrcDir() // 创建目录
    }
    async ensurePackageJSON() {
        await fs.writeJSON(path.join(this.rootPath, 'package.json'), {
            name: 'name',
            description: '这就是pck里面的内容。'
        })
    }
    async ensureLzzConfig() {
        await fs.writeJSON(path.join(this.rootPath, 'lzz.config.js'), {
            name: 'name',
            description: '这就是pck里面的内容。'
        }, {
            spaces: 2
        })
    }
    async ensureSrcDir() {
        await fs.mkdirp(path.join(this.rootPath, 'src'))
    }
}

function factory(argv) {
    new InitCommand(argv).execute()
}

module.exports = factory