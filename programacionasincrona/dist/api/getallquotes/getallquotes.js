"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let axiosconfiguracion = {
    method: "GET",
    url: "https://www.breakingbadapi.com/api/quotes"
};
axios_1.default(axiosconfiguracion).then((Quotelist) => { console.log(Quotelist.data); }).catch(Error => { console.log("Pendejo"); });
//# sourceMappingURL=getallquotes.js.map