import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StudentServices } from "./student.service";

const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Students are retrived successfully",
    data: result,
  });
});

export const StudentControllers = {
  getAllStudent,
};
