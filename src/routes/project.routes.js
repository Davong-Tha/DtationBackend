import { Router } from "express";
import { create } from "../controllers/project.controller.js";
import { requiredAuth } from "../middleware/requiredAuth.js";

const router = Router();
router.post("/create", requiredAuth, create);

export default router;
