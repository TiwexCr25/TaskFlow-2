import { Router } from "express";

import {
    postTask,
    getTasks,
    getTask
} from "../controller/taskController.js";

const router = Router();

router.post("/", postTask);
router.get("/", getTasks);
router.get("/:id", getTask);

export default router;