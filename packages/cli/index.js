const yargs = require('yargs/yargs') // 16版本以下的node不要安装17的yargs

function lzzCLI() {
    const cli = yargs()
    const globalConfig = {
        logLevel: {
            type: 'string',
            describe: 'lzz cli',
            defaultDescription: 'info',
            alas: 'L'
        }
    }
    const globalKeys = Object.keys(globalConfig).concat(['help', 'version'])

    return cli.options(globalConfig)
        .group(globalKeys, 'Global Options:')
        .usage('Usage $0 <command> [options]')
        .demandCommand(1, '至少需要一个命令')
        .strict()
        .recommendCommands() //'Did you mean %s?'
        .fail((msg, err) => { // 可以个性化错误展示
            console.log(msg)
            cli.exit()
        }).alias('h', 'help')
        .alias('v', 'version')
        .epilogue('when a command fails, all logs are written to lzz-debug.log in the current working directory')
}
module.exports = lzzCLI