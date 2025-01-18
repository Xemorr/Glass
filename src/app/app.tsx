import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import FilesView from "./FilesView";
import { Editable, useEditor } from "@wysimark/react";

type MarkdownFile = {
  name: string,
  content: string
}

const App: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState<string>("# Welcome to Your Markdown App");
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const editor = useEditor(null);
    const fileList: MarkdownFile[] = [
      { name: "File1.md", content: "# This is File 1\n\nHello, world!" },
      { name: "File2.md", content: "## This is File 2\n\nMarkdown content here." },
      { name: "File3.md", content: "### This is File 3\n\nMore markdown text." },
    ];
  
    const handleFileClick = (file: MarkdownFile) => {
      setSelectedFile(file.name);
      setMarkdownContent(file.content);
    };

    let myContent = "# This is File 1";

  
    return (
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <FilesView selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
        </div>
        <div style={styles.main}>
          <Editable editor={editor} value={markdownContent} onChange={setMarkdownContent}/>
        </div>
      </div>
    );
  };

  
const styles: {[key: string]: React.CSSProperties} = {
    container: {
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
    },
    sidebar: {
        width: "25%",
        backgroundColor: "#f4f4f4",
        padding: "1rem",
        borderRight: "1px solid #ddd",
    },
    sidebarTitle: {
        margin: "0 0 1rem",
    },
    fileList: {
        listStyle: "none",
        padding: "0",
        margin: "0",
    },
    fileItem: {
        padding: "0.5rem",
        cursor: "pointer",
        borderRadius: "4px",
    },
    activeFile: {
        backgroundColor: "#ddd",
        fontWeight: "bold",
    },
    main: {
        flex: 1,
        padding: "1rem",
        overflowY: "auto",
        backgroundColor: "#ffffff",
    },
};

const root = createRoot(document.body);
root.render(<App/>);