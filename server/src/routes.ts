import {Router, Request, Response} from "express";
import {ListTaskController} from "./ListTask/Controller/ListTaskController";
import {CreateTaskController} from "./CreateTask/Controller/CreateTaskController";
import {UptadeTaskController} from "./UptadeTask/Controller/UptadeTaskController";
import {DeleteTaskController} from "./DeleteTask/Controller/DeleteTaskController";

const router = Router();

router.get("/tasks", (req: Request, res: Response) => {
  ListTaskController.getList(req, res);
});

router.post("/tasks", (req: Request, res: Response) => {
  CreateTaskController.create(req, res);
});

router.put("/tasks/:id", (req: Request, res: Response) => {
  UptadeTaskController.uptade(req, res);
});

router.delete("/tasks/:id", (req: Request, res: Response) => {
  DeleteTaskController.deleteTask(req, res);
});

export {router};
