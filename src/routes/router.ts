import { Router } from "express";
import * as todoController from "../controllers/todoController";

const router = Router();

router.get("/ping", todoController.ping);

router.post("/add", todoController.addTask);
router.get("/get", todoController.getTasks);
router.put("/updateone/:id", todoController.updateOneTask);
router.put("/update/:id", todoController.updateTask);
router.delete("/delete/:id", todoController.deleteTask);

export default router;
