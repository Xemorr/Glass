import { useState, useEffect } from "react";

declare global {
    interface Window {
        api: {
            joinPath: (...args: string[]) => string;
            readDir: () => Promise<string[]>;
        };
    }
}

const FilesView = ({selectedFile, setSelectedFile}: {selectedFile: string, setSelectedFile: (s: string) => void}) => {
    const [files, setFiles] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        window.api
          .readDir()
          .then((fileList) => setFiles(fileList))
          .catch((err) => setError(`Unable to scan directory: ${err}`));
    }, []);

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