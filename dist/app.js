"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const Restaurant_1 = __importDefault(require("./Restaurant"));
const liquidjs_1 = require("liquidjs");
const app = (0, express_1.default)();
const restaurant = new Restaurant_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, '../static/')));
const engine = new liquidjs_1.Liquid();
app.engine('liquid', engine.express());
app.set('views', path_1.default.join(__dirname, '../views/'));
app.set('view engine', 'liquid');
app.get('/', (req, res) => {
    res.render('menu', {
        settings: restaurant.settings,
        menu: restaurant.menu,
        hours: restaurant.hours
    });
});
app.listen('3040', () => {
    console.log('** bonsai-menu is listening on 3040: (http://localhost:3040/)');
});
