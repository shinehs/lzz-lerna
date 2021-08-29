const cli = require("@lzz/cli")
const initCmd = require('@lzz/init/command')
const createCmd = require('@lzz/create/command')

function main(argv) {
    const context = {
        lzzVersion: '0.0.1'
    }
    return cli().command(initCmd).command(createCmd).parse(argv)
}

module.exports = main