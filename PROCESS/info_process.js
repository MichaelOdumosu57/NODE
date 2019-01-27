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