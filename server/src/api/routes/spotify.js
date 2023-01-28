import { Router } from "express";
import { login } from "../controllers/spotify/index.js";

const router = Router();

// AUTH
router.post("/login", login);

//PLAYLIST FETCH

//PLAYLIST PUT

export default router;
