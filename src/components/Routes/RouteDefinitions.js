"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const NotFound_1 = __importDefault(require("../../pages/NotFound/NotFound"));
const Platform_1 = __importDefault(require("../../pages/Platform/Platform"));
const RouteDefinitions = (props) => {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Platform_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.default, null) })));
};
exports.default = RouteDefinitions;
