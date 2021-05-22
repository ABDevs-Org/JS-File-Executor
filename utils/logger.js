require('colors');

function info(message) {
    console.log('[INFO]'.brightCyan.bold, '[JS File Executor]'.green.bold, message.brightCyan.bold);
}

function error(message) {
    console.log('[ERROR]'.red.bold, '[JS File Executor]'.green.bold, message.red.bold);
}

function warn(message) {
    console.log('[WARN]'.yellow.bold, '[JS File Executor]'.green.bold, message.yellow.bold);
}

module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;