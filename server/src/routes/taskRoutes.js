import { Router } from "express";

import {
    postTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
} from "../controller/taskController.js";

const router = Router();

router.post("/", postTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;