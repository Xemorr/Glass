"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const client_1 = require("react-dom/client");
const react_markdown_1 = __importDefault(require("react-markdown"));
const FilesView_1 = __importDefault(require("./FilesView"));
const App = () => {
    const [markdownContent, setMarkdownContent] = (0, react_1.useState)("# Welcome to Your Markdown App");
    const [selectedFile, setSelectedFile] = (0, react_1.useState)(null);
    const fileList = [
        { name: "File1.md", content: "# This is File 1\n\nHello, world!" },
        { name: "File2.md", content: "## This is File 2\n\nMarkdown content here." },
        { name: "File3.md", content: "### This is File 3\n\nMore markdown text." },
    ];
    const handleFileClick = (file) => {
        setSelectedFile(file.name);
        setMarkdownContent(file.content);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.container }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.sidebar }, { children: (0, jsx_runtime_1.jsx)(FilesView_1.default, { selectedFile: selectedFile, setSelectedFile: setSelectedFile }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.main }, { children: (0, jsx_runtime_1.jsx)(react_markdown_1.default, { children: markdownContent }, void 0) }), void 0)] }), void 0));
};
const styles = {
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
const root = (0, client_1.createRoot)(document.body);
root.render((0, jsx_runtime_1.jsx)(App, {}, void 0));
//# sourceMappingURL=app.js.map