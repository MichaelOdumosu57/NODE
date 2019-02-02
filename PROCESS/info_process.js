console.log(`\n`)
// console.log(` \n ${process.} \n`)
console.log(`This processor architecture is \n ${process.arch} \n `);
console.log(`The executable  location of process and args given for this process   \n ${process.argv} \n `)
console.log(`The true value of argv[0] \n ${process.argv0} \n  `)
console.log(`Reference to the channed that started this process  \n ${process.channel} \n  `)
console.log('The options use to compile the current Node.js executable \n' +  JSON.stringify(   process.config,null,2   ) +'\n')
console.log(`connected to an ipc channel \n ${process.connected} \n`)
console.log(`Current directory: \n ${process.cwd()} \n`);
console.log(`The port the process debugger is listening \n ${process.debugPort} \n`)
console.log('Where the process is working in  \n ' + JSON.stringify(   process.env,null,2   ) + ' \n')
console.log(`process.execArgv \n ${process.execArgv} \n`)
console.log(`the item that started this process \n ${process.execPath} \n`)
console.log(`Effective uid: \n ${process.geteuid()} \n`);
console.log(`Current uid: \n ${process.getuid()} \n`);
console.log(`Effective gid: \n ${process.getegid()} \n`);
console.log(`Current gid: \n ${process.getgid()} \n`);
console.log(`Groups \n ${process.getgroups()} \n`)
console.log(`process.hasUncaughtExceptionCaptureCallback() \n ${process.hasUncaughtExceptionCaptureCallback()} \n`)
console.log('mem usage\n' +  JSON.stringify(   process.memoryUsage(),null,2   ) +'\n')
console.log(`if flag --no-deprecation is set on the process \n ${process.noDeprecation} \n `)
console.log(`process pid \n ${process.pid} \n`)
console.log(`The parent process pid \n ${process.ppid} \n `);
console.log(`This platform is \n ${process.platform} \n`);
console.log('process.release \n ' + JSON.stringify(   process.release,null,2   ) + ' \n')
console.log(`process.stdin  is connected to a TTY \n ${process.stdin.isTTY} \n`)
console.log(`process.stdout  is connected to a TTY \n ${process.stdout.isTTY} \n`)
console.log(`process.stderr  is connected to a TTY \n ${process.stderr.isTTY} \n`)


console.log(`The  number representation of how the process ended  \n ${process.exitCode} \n`)
