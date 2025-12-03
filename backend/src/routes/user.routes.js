import { Router } from "express";
import { requiredAuth } from "../middleware/requiredAuth.js";
import { me } from "../controllers/user.controller.js";

const router = Router();

router.get("/me", requiredAuth, me);

export default router;
