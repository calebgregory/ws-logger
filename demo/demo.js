const path = require('path')
const open = require('open')

async function main() {
  require(path.resolve(__dirname, '../logger/server'))

  const log = require(path.resolve(__dirname, '../logger/logger')).logger('demo')

  open('http://localhost:3000')

  await new Promise((resolve) => setTimeout(resolve, 2000))

  log.info('this', { is: 'a log' })
  log.debug('this', { is: 'a log, too' })
  log.warning('uh-oh')
  log.error(new Error('this logger has some limitations - it only can transport serializable data, which does not include Error instances'))
}

main()
