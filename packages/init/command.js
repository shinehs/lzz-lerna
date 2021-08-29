const initCommand = () => {
    return {
        command:'init <name>',
        describe: '初始化命令',
        builder: (yargs) => { 
            console.log('~~~')
        },
        handler: (argv) => { 
            console.log('args~~~')
            return require('.')(argv)
        }
    }
}
module.exports = initCommand()