const { exec } = require('child_process')

if (process.platform === 'linux') {
  const fs = require('fs')
  
  let terminalBinsCandicates = [
    {
      path: '/usr/bin/xfce4-terminal',
      switch: '--command'
    },
    {
      path: '/usr/bin/xterm',
      switch: '-e'
    },
    {
      path: '/usr/bin/gnome-terminal',
      switch: '-e'
    },
    {
      path: '/usr/bin/konsole',
      switch: '-e'
    },
    {
      path: '/usr/bin/terminal',
      switch: '-e'
    }
  ]
  
  let terminalConf
  for (let i = 0; i < terminalBinsCandicates.length; i++) {
    let p = terminalBinsCandicates[i].path
    if (fs.existsSync(p)) {
      terminalConf = terminalBinsCandicates[i]
      break
    }
  }
  
  if (terminalConf !== undefined) {

    let terminalPath = terminalConf.path
    let terminalSwitch = terminalConf.switch
    
    let termExec = function (command, options, callback) {
      if (command.indexOf('"')) {
        command = command.split('"').join('\\"')
      }

      command = terminalPath + ' ' + terminalSwitch + ' "' + command + '"'
      exec(command, options, callback)
    }
  }
  else {
    console.log("Terminal is not found.")
    termExec = exec
  }
  
  module.exports = termExec
}
else if (process.platform === 'win32') {
  let termExec = function (command, options, callback) {
    
    command = 'start cmd /c "' + command + '"'
    //console.log(command)
    exec(command, options, callback)
  }
  
  module.exports = termExec
}
else {
  module.exports = exec
}
/*
 *  module.exports = function () {
   console.log('Hello world')
 }
 */