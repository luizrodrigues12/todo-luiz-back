"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.updateOneTask = exports.getTasks = exports.home = exports.addTask = exports.ping = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
let caughtDone;
const ping = (req, res) => {
    res.json({ pong: true });
};
exports.ping = ping;
const addTask = (req, res) => {
    const { title, done } = req.body;
    //Criando Task
    if (title) {
        const task = Todo_1.default.create({
            title: title,
            done: done ? done : false,
        })
            .then((result) => {
            res.status(201);
            res.json(result);
        })
            .catch((err) => {
            res.json(err);
            res.status(401);
        });
    }
    else {
        res.status(400);
        res.json({ error: "Dados não enviados" });
    }
};
exports.addTask = addTask;
const home = (req, res) => {
    res.json("Hello");
};
exports.home = home;
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Todo_1.default.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});
exports.getTasks = getTasks;
const updateOneTask = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    if (title) {
        Todo_1.default.findByIdAndUpdate(id, { title: title })
            .then((result) => res.json(result))
            .catch((err) => res.json(err));
    }
    else
        res.json({ error: "Título não enviado." });
};
exports.updateOneTask = updateOneTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title } = req.body;
    yield Todo_1.default.findById(id)
        .then((result) => {
        caughtDone = result ? result.done : false;
    })
        .catch((err) => res.json(err));
    Todo_1.default.findByIdAndUpdate(id, {
        done: caughtDone ? false : true,
    })
        .then((result) => {
        res.json(result);
    })
        .catch((err) => res.json(err));
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    const { id } = req.params;
    Todo_1.default.deleteOne({ _id: id })
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
};
exports.deleteTask = deleteTask;
