const { exec } = require('child_process')

let command = 'npm publish'
exec(command, (...args) => {
  args.forEach(arg => {
    if (arg !== null && typeof(arg) === 'string' && arg.trim() !== '') {
      console.log(arg)
    }
  })
})