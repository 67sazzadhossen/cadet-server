import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createAcademicDepartmentValidation,
  updateAcademicDepartmentValidation,
} from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(createAcademicDepartmentValidation),
  AcademicDepartmentControllers.createAcademicDepartment
);

router.get("/", AcademicDepartmentControllers.getAllAcademicDepartment);
router.get(
  "/:academic_department_id",
  AcademicDepartmentControllers.getSingleAcademicDepartment
);
router.patch(
  "/:academic_department_id",
  validateRequest(updateAcademicDepartmentValidation),
  AcademicDepartmentControllers.updateSingleAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
