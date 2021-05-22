const fs = require('fs');
const logger = require('../utils/logger');
const path = require('path');
const appDir = path.dirname(require.main.filename);

function executeDir(dirPath, args) {
    const dirFiles = fs.readdirSync(dirPath);
    const jsFiles = dirFiles.filter(file => file.endsWith('.js'));
    jsFiles.forEach(file => {
        try {
            require(`${appDir}/${dirPath}/${file}`).apply({}, args);
            logger.info(`Executed ${file}`);
        } catch (e) {
            logger.error(`Something went wrong while executing ${file}. Error: ${e.message}`);
            console.log(e);
        }
    });
}

function init(dirPath, args) {
    dirPath = dirPath || './auto-execute';
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
    executeDir(dirPath, args);
}

module.exports.init = init;