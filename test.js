const terminalExec = require('./index.js')

if (process.platform === 'win32') {
  terminalExec('echo "Hello world" && pause')
}
else if (process.platform === 'linux') {
  terminalExec('sudo echo "Hello world"')
}