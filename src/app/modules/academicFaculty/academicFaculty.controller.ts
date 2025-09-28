import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { academicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.createAcademicFacultyIntoDb(
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Faculty Created Successfully",
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.getAllAcademicFacultyFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Faculty Retrieved Successfully",
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { academic_faculty_id } = req.params;
  const result = await academicFacultyServices.getSingleAcademicFacultyFromDb(
    academic_faculty_id
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Single Academic Faculty Retrieved Successfully",
    data: result,
  });
});

const updateSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { academic_faculty_id } = req.params;
  const result = await academicFacultyServices.updateAcademicFacultyFromDb(
    academic_faculty_id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Single Academic Faculty Updated Successfully",
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
};
