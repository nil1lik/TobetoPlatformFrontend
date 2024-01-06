"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Platform_1 = __importDefault(require("./pages/Platform/Platform"));
const Navbar_1 = __importDefault(require("./layouts/Navbar/Navbar"));
const Footer_1 = __importDefault(require("./layouts/Footer/Footer"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement(semantic_ui_react_1.Container, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Platform_1.default, null) }))),
        react_1.default.createElement(Footer_1.default, null)));
}
exports.default = App;
