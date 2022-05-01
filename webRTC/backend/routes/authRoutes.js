import express from "express";
import { register, login } from "../controllers/auth/authController.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").post(register);

export default router;
