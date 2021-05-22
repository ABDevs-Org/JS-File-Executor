const executionManager = require('./managers/executionManager');

module.exports = (dirPath, ...args) => executionManager.init(dirPath, args);