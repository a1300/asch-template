
class Install {
  constructor(logger) {
    this.logger = logger
  }
  install(link) {
    this.logger.info(`installing... ${link}`)
  }
}

module.exports = Install
