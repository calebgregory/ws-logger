# ws-logger

Read the logs from your CLI app in a browser console <(''<)

## Demo

```bash
node demo/demo.js
```

## Usage

```javascript
// in main.js

require('logger/server')

// in any given file, 'some/file'

const log = require('logger').logger('some/file')

log.info('this', { is: 'a log' })
log.debug('this', { is: 'also' }, ['a'], 'log')
```