import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnect from "./db/dbConnect.js";
import "express-async-errors";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

dbConnect();
const app = express();
const PORT = process.env.PORT || process.env.API_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use(cors());

app.use("/api/auth", authRouter);

app.listen(PORT, console.log(`Server is running at port ${PORT}`));
