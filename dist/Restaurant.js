"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Menu_1 = __importDefault(require("./Menu"));
class Restaurant {
    constructor() {
        this.checkTheme = () => {
            const theme = this.settings.bonsaiSettings.menuTheme;
            if (theme !== null) {
                console.log('Using theme:', theme);
            }
        };
        // Read bonsai.json, store it in instance's "settings"
        const configFile = path_1.default.join(__dirname, '../bonsai.json');
        const settings = JSON.parse(fs_1.default.readFileSync(configFile).toString());
        this.settings = settings;
        // Read hours.json, store it in "hours"
        const hoursFile = path_1.default.join(__dirname, '../hours.json');
        const hours = JSON.parse(fs_1.default.readFileSync(hoursFile).toString());
        this.hours = hours;
        // Read menu.json and store it on the instance
        this.menu = new Menu_1.default('../bonsai-menu.json');
        this.checkTheme();
    }
}
exports.default = Restaurant;
