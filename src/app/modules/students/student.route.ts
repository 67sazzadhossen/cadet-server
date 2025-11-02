import express from "express";
import { StudentControllers } from "./student.controller";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.get("/", auth(), StudentControllers.getAllStudent);

export const StudentRoutes = router;
