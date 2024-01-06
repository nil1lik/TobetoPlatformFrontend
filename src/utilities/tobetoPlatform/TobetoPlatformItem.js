"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const TobetoPlatformItem = (props) => {
    const logoSrc = process.env.PUBLIC_URL + `/images/${props.imageSrc}`;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(semantic_ui_react_1.Item, { style: { textAlign: "center" } },
            react_1.default.createElement(semantic_ui_react_1.ItemContent, null,
                props.imageSrc ? (react_1.default.createElement(semantic_ui_react_1.Image, { src: logoSrc, size: props.imageSize, centered: true })) : (react_1.default.createElement(semantic_ui_react_1.ItemHeader, { style: { marginBottom: "0.5rem" } },
                    react_1.default.createElement("span", { style: { fontSize: "36px", fontWeight: 700, color: "#9b33ff" } }, props.headerText1),
                    react_1.default.createElement("span", { style: { fontSize: "36px", fontWeight: 400, color: "#4D4D4D" } }, props.headerText2))),
                react_1.default.createElement(semantic_ui_react_1.ItemDescription, { style: {
                        fontSize: "30px",
                        fontWeight: 400,
                        color: "#4D4D4D",
                        marginBottom: "1.25rem",
                        contrast: "8.45",
                    } }, props.description),
                react_1.default.createElement(semantic_ui_react_1.ItemExtra, { style: {
                        fontSize: "24px",
                        fontWeight: 500,
                        color: "#1C1917",
                        contrast: "17.48",
                    } }, props.subDescription)))));
};
exports.default = TobetoPlatformItem;
