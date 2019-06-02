const terminalExec = require('./index.js')

if (process.platform === 'win32') {
  terminalExec('echo "Hello world" && pause')
}
else if (process.platform === 'linux') {
  terminalExec('sudo echo "Hello world" && read -n 1 -p "Press any key to continue..."')
}