const DI = require('./DI')
const logger = require('./logger')
const program = require('commander')
const version = require('./package.json').version

// https://www.exratione.com/2013/05/die-child-process-die/
process.once('uncaughtException', (error) => {
  logger.error('UNCAUGHT EXCEPTION')
  logger.error(error.stack)
})


const init = DI.container.get(DI.DEPENDENCIES.INIT)
const install = DI.container.get(DI.DEPENDENCIES.INSTALL)

program
  .version(version)

program
  .command('init')
  .description('initialize DApp')
  .action(() => {
    init.init()
  })

program
  .command('install')
  .description('install official or community asch template')
  .action((link) => {
    install.install(link)
  })

program
  .parse(process.argv)
