import express from "express";
const router = express.Router();
import {authUser, getUserProfile} from "../controllers/User.js";
import {protect} from "../middlewares/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
