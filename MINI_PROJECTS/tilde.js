const path = require('path');
function resolveHome(filepath) {
    if (filepath[0] === '~') {
        return path.join(process.env.HOME, 'My_Computer/NVM/NODE/MINI_PROJECTS/PIPE_STREAM');
    }
    return filepath;
}
setImmediate(() => {
console.log(resolveHome('~/My_Computer/NVM/NODE/MINI_PROJECTS/PIPE_STREAM'))
})