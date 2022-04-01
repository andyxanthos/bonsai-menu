"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class Menu {
    constructor(filePath) {
        this.filePath = filePath;
        const menuFile = path_1.default.join(__dirname, filePath);
        const sections = JSON.parse(fs_1.default.readFileSync(menuFile).toString());
        this.sections = sections;
    }
}
exports.default = Menu;
