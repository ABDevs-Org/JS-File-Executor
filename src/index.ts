import executionManager from './managers/executionManager';

export = (dirPath: string, ...args: any[]) => executionManager(dirPath, args);