import { useState, useEffect } from "react";

declare global {
    interface Window {
        api: {
            readDir: (path: string) => Promise<string[]>;
            onFolderOpened: (callback: (folderPath: string) => void) => void
        };
    }
}

const FilesView = ({selectedFile, setSelectedFile}: {selectedFile: string, setSelectedFile: (s: string) => void}) => {
    const [files, setFiles] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [directory, setDirectory] = useState<string | null>(null);
    
    window.api.onFolderOpened((path: string) => {
        if (path) {
            setDirectory(path);
            setFiles([path]);
        }
    })

    useEffect(() => {
        if (directory !== null) {
            console.log(directory)
            window.api.readDir(directory)
            .then((fileList) => setFiles(fileList))
            .catch((err) => setError(`Unable to scan directory: ${err}`));
        }
    }, [directory]);

    return (
        <div>
            <h3>Files</h3>
            {files.map((file, index) => (
                <li key={index}>
                    {file}
                </li>
            ))}
        </div>
    )
}

export default FilesView;