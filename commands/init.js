
class Init {
  constructor(logger) {
    this.logger = logger
  }
  init() {
    this.logger.info('initialize...')
  }
}

module.exports = Init
