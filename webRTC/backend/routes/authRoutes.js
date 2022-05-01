import express from "express";
import { register, login } from "../controllers/auth/authController.js";
import Joi from "joi";
import Validator from "express-joi-validation";
import { verifyToken } from "../middlewares/auth.js";

const validator = Validator.createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

const router = express.Router();

router.route("/login").post(validator.body(loginSchema), login);
router.route("/register").post(validator.body(registerSchema), register);
//router.post("/register", validator.body(registerSchema), register);
router.route("/logout").post(register);

router.route("/test").get(verifyToken, (req, res) => {
  res.send("request passed");
});

export default router;
