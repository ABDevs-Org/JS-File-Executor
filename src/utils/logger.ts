import _ from 'colors';

function info(message: string) {
    console.log('[INFO]'.blue, '[JS File Executor]'.green, message.blue);
}

function error(message: string) {
    console.log('[ERROR]'.red, '[JS File Executor]'.green, message.red);
}

function warn(message: string) {
    console.log('[WARN]'.yellow, '[JS File Executor]'.green, message.yellow);
}

export default {
    info,
    warn,
    error
};