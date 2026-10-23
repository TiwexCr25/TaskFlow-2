import { Router } from "express";

import {
    postTask,
    getTasks,
    getTask,
    deleteTask
} from "../controller/taskController.js";

const router = Router();

router.post("/", postTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);

export default router;