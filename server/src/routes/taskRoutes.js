import { Router } from "express";

import {
    postTask,
    getTask
} from "../controller/taskController.js";

const router = Router();

router.post("/", postTask);
router.get("/", getTask);

export default router;