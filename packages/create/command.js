const createCommand = () => {
    return {
        command: 'create <name>',
        describe: '创建命令',
        builder: (yargs) => {
            console.log('~~~~')
            // 代表占位
            yargs.positional('name', {
                type: 'string',
                describe: '包名'
                // lzz create xxx --registry *****
            }).options({
                registry: {
                    group: 'Command Groups:',
                    describe: '仓库地址',
                    type: 'string',
                }
            })
        },
        handler: (argv) => {
            // console.log(argv)
            return require('.')(argv)
        }
    }
}
module.exports = createCommand()