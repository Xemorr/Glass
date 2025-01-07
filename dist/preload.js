// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');
const fs = require('fs');
contextBridge.exposeInMainWorld('api', {
    joinPath: (arg1, arg2) => path.join(arg1, arg2),
    readDir: (directoryPath) => new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                reject(err.message);
            }
            else {
                resolve(files);
            }
        });
    }),
});
//# sourceMappingURL=preload.js.map