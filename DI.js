const inversify = require('inversify')
const helpers = require('inversify-vanillajs-helpers').helpers
require('reflect-metadata')

const logger = require('./logger.js')
const init = require('./commands/init.js')
const install = require('./commands/install.js')

const DEPENDENCIES = {
  LOGGER: 'Logger',
  INIT: 'Init',
  INSTALL: 'Install',
}

const container = new inversify.Container()

// annotate
helpers.annotate(init, [DEPENDENCIES.LOGGER])
helpers.annotate(install, [DEPENDENCIES.LOGGER])

const setup = () => {
  // bindings
  container.bind(DEPENDENCIES.INIT).to(init)
  container.bind(DEPENDENCIES.INSTALL).to(install)

  // constants or third party libraries
  const registerConstantValue = helpers.registerConstantValue(container)
  registerConstantValue(DEPENDENCIES.LOGGER, logger)
}

const resetConstants = () => {
  container.unbindAll()
  setup()
}

setup()

module.exports = {
  container,
  DEPENDENCIES,
  helpers,
  resetConstants,
}
