"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TobetoPlatformItem_1 = __importDefault(require("../../utilities/tobetoPlatform/TobetoPlatformItem"));
const imageSize_1 = __importDefault(require("../../enums/imageSize"));
const Platform = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "9rem", marginTop: "9rem" } },
            react_1.default.createElement(TobetoPlatformItem_1.default, { headerText1: "TOBETO", headerText2: "'ya ho\u015F geldin", description: "Nil", subDescription: "Yeni nesil \u00F6\u011Frenme deneyimi ile Tobeto kariyer yolculu\u011Funda senin yan\u0131nda!" }),
            react_1.default.createElement(TobetoPlatformItem_1.default, { imageSrc: "istanbulKodluyor.png", imageSize: imageSize_1.default.medium, description: "\u00DCcretsiz e\u011Fitimlerle, gelece\u011Fin mesleklerinde sen de yerini al.", subDescription: "Arad\u0131\u011F\u0131n  \u201C\u0130\u015F\u201D  Burada!" }))));
};
exports.default = Platform;
