"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connect = mongoose_1.default.connect("mongodb+srv://lort:Cleibson123@nodeexpressprojects.ehv28f7.mongodb.net/to-do?retryWrites=true&w=majority&appName=NodeExpressProjects");
exports.default = connect;
