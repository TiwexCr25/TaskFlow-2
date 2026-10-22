import { Router } from "express";

import { postTask } from "../controller/taskController.js";

const router = Router();

router.post("/", postTask);

export default router;