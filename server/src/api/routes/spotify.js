import { Router } from "express";
import { login, callback, refreshToken } from "../controllers/spotify/index.js";

const router = Router();

// AUTH
router.get("/login", login);
router.get("/callback", callback);
router.get("/refresh_token", refreshToken);
//PLAYLIST FETCH

//PLAYLIST PUT

export default router;
