// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    readDir: (path: string) => ipcRenderer.invoke('read-dir', path),
    onFolderOpened: (callback: (folderPath: string) => void) => 
        ipcRenderer.on('folder-opened', (_, folderPath: string) => callback(folderPath)),
});