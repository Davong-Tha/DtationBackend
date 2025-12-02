import { Router } from "express";
import { create, getAll } from "../controllers/project.controller.js";
import { requiredAuth } from "../middleware/requiredAuth.js";

const router = Router();
router.post("/create", requiredAuth, create);
router.get("/getAll", requiredAuth, getAll);

export default router;
