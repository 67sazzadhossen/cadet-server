import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createAcademicFacultyValidation,
  updateAcademicFacultyValidation,
} from "./academicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(createAcademicFacultyValidation),
  AcademicFacultyControllers.createAcademicFaculty
);

router.get("/", AcademicFacultyControllers.getAllAcademicFaculty);
router.get(
  "/:academic_faculty_id",
  AcademicFacultyControllers.getSingleAcademicFaculty
);
router.patch(
  "/:academic_faculty_id",
  validateRequest(updateAcademicFacultyValidation),
  AcademicFacultyControllers.updateSingleAcademicFaculty
);

export const AcademicFacultyRoutes = router;
