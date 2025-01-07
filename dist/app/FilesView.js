"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
window.require('path');
window.require('fs');
const FilesView = ({ selectedFile, setSelectedFile }) => {
    const [files, setFiles] = (0, react_1.useState)([]);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const directoryPath = window.api.joinPath(__dirname, "Documents");
        window.api
            .readDir(directoryPath)
            .then((fileList) => setFiles(fileList))
            .catch((err) => setError(`Unable to scan directory: ${err}`));
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Files" }, void 0), files.map((file, index) => ((0, jsx_runtime_1.jsx)("li", { children: file }, index)))] }, void 0));
};
exports.default = FilesView;
//# sourceMappingURL=FilesView.js.map