import fs from 'fs';
import logger from '../utils/logger';
import path from 'path';
const appDir = path.dirname(require.main!.filename);

function executeDir(dirPath: string, args: any[]) {
    const dirFiles = fs.readdirSync(dirPath);
    const jsFiles = dirFiles.filter(file => file.endsWith('.js'));
    jsFiles.forEach(file => {
        try {
            require(`${appDir}/${dirPath}/${file}`).apply({}, args);
            logger.info(`Executed ${file}`);
        } catch (e) {
            logger.error(`Something went wrong while executing ${file}. Error: ${e instanceof Error ? e.message : e}`);
            console.log(e);
        }
    });
}

export default function init(dirPath: string, args: any[]) {
    dirPath = dirPath || './auto-execute';
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
    executeDir(dirPath, args);
}