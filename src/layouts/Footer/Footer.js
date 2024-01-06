"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const logoSrc = process.env.PUBLIC_URL + "/images/Tebeto-logo-yatay-beyaz.png";
const Footer = (props) => {
    return (react_1.default.createElement(semantic_ui_react_1.Menu, { pointing: true, secondary: true, size: "huge", style: { backgroundColor: "#9b33ff" } },
        react_1.default.createElement(semantic_ui_react_1.Container, null,
            react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
                react_1.default.createElement(semantic_ui_react_1.Image, { src: logoSrc, size: "small" })),
            react_1.default.createElement(semantic_ui_react_1.Menu.Item, { position: "right" },
                react_1.default.createElement(semantic_ui_react_1.Button, { style: { backgroundColor: "#ffffff", color: "#000000", borderRadius: "20px", fontSize: "14px", fontWeight: "800" } }, "Bize Ula\u015F\u0131n")))));
};
exports.default = Footer;
