import express from "express";
import { getMe, signUp,logout,login  } from "../controllers/auth.contoller.js";
import { protectRoute } from "../middleware/protectRoute.js"
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me",protectRoute,getMe)


export default router;
