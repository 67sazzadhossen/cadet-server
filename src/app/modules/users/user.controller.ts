import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";
import { AppError } from "../../errors/AppError";

const createStudent = catchAsync(async (req, res) => {
  const studentData = req.body;
  const result = await UserServices.createStudentIntoDB(studentData);
  if (typeof result === "undefined" || result === null) {
    throw new AppError(status.BAD_REQUEST, "Failed to create student");
  }
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User created successfully",
    data: result,
  });
});
const createTeacher = catchAsync(async (req, res) => {
  const teacherData = req.body;
  const result = await UserServices.createTeacherIntoDB(teacherData);

  if (typeof result === "undefined" || result === null) {
    throw new AppError(status.BAD_REQUEST, "Failed to create teacher");
  }

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User created successfully",
    data: result,
  });
});

export const UserControllers = { createStudent, createTeacher };
