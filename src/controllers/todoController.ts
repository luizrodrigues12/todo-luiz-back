import { Request, Response } from "express";
import TodoModel from "../models/Todo";
import { title } from "process";
let caughtDone: boolean;

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const addTask = (req: Request, res: Response) => {
  const { title, done } = req.body;

  //Criando Task
  if (title) {
    const task = TodoModel.create({
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
  } else {
    res.status(400);
    res.json({ error: "Dados não enviados" });
  }
};

export const home = (req: Request, res: Response) => {
  res.json("Hello");
};

export const getTasks = (req: Request, res: Response) => {
  const taskList = TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

export const updateOneTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;

  if (title) {
    TodoModel.findByIdAndUpdate(id, { title: title })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  } else res.json({ error: "Título não enviado." });
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;

  await TodoModel.findById(id)
    .then((result) => {
      caughtDone = result ? result.done : false;
    })
    .catch((err) => res.json(err));

  TodoModel.findByIdAndUpdate(id, {
    done: caughtDone ? false : true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;

  TodoModel.deleteOne({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
