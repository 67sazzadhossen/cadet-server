import express from "express";
import { UserControllers } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.post("/create-student", auth(), UserControllers.createStudent);
router.post(
  "/create-teacher",
  validateRequest(userValidationSchema),
  UserControllers.createTeacher
);

export const UserRoutes = router;
