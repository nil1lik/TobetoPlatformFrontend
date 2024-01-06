"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavButton_1 = __importDefault(require("./NavButton"));
const semantic_ui_react_1 = require("semantic-ui-react");
const Navbar = (props) => {
    const logoSrc = process.env.PUBLIC_URL + "/images/tobeto-logo.png";
    const options = [
        { key: 1, text: 'Profil Bilgileri', value: 1 },
        { key: 2, text: 'Oturumu Kapat', value: 2 },
    ];
    return (react_1.default.createElement(semantic_ui_react_1.Menu, { pointing: true, secondary: true, size: 'huge' },
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
            react_1.default.createElement(semantic_ui_react_1.Image, { src: logoSrc, size: 'small' })),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, { style: { flexGrow: 12 } },
            react_1.default.createElement(semantic_ui_react_1.Button.Group, { style: { margin: 'auto' } },
                react_1.default.createElement(NavButton_1.default, { text: 'Ana Sayfa' }),
                react_1.default.createElement(NavButton_1.default, { text: 'Profilim' }),
                react_1.default.createElement(NavButton_1.default, { text: 'Değerlendirmeler' }),
                react_1.default.createElement(NavButton_1.default, { text: 'Katalog' }),
                react_1.default.createElement(NavButton_1.default, { text: 'Takvim' }),
                react_1.default.createElement(NavButton_1.default, { text: 'İstanbul Kodluyor' }))),
        react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
            react_1.default.createElement(semantic_ui_react_1.Dropdown, { text: 'Kullan\u0131c\u0131', options: options, item: true }))));
};
exports.default = Navbar;
