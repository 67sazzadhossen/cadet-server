import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { academicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.createAcademicDepartmentIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Department Created Successfully",
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.getAllAcademicDepartmentFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Academic Department Retrieved Successfully",
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { academic_department_id } = req.params;
  const result =
    await academicDepartmentServices.getSingleAcademicDepartmentsFromDb(
      academic_department_id
    );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Single Academic Department Retrieved Successfully",
    data: result,
  });
});

const updateSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { academic_department_id } = req.params;
  const result =
    await academicDepartmentServices.updateAcademicDepartmentFromDb(
      academic_department_id,
      req.body
    );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Single Academic Department Updated Successfully",
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateSingleAcademicDepartment,
};
