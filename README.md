# terminal-exec

"terminal-exec" is a Node.js module used to execute command in terminal. It is very useful when your command need interactive. For example, "sudo" need user enter password.

# Requirement

"terminal-exec" had been tested in Windows 7 (64bit) and Ubuntu 16.04 LTS (64bit) with Node.js v10.15.0.

# Install

````
npm i terminal-exec
````

----

# Usage

## Windows

````js
const terminalExec = require('./index.js')
terminalExec('echo "Hello world" && pause')
````

Result:

![image](https://user-images.githubusercontent.com/2345913/58757428-11d33900-853f-11e9-8267-8158c86828ea.png)


## Linux

````js
const terminalExec = require('./index.js')
terminalExec('sudo echo "Hello world" & pause')
````
Result:

![anime](https://user-images.githubusercontent.com/2345913/58757490-e4d35600-853f-11e9-841d-8e8f070cf4e1.gif)

----

# Websites

- Project: https://github.com/pulipulichen/terminal-exec
- Issues: https://github.com/pulipulichen/terminal-exec/issues
- npm: https://www.npmjs.com/package/terminal-exec