import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createStudent = catchAsync(async (req, res) => {
  const studentData = req.body;
  const result = await UserServices.createStudentIntoDB(studentData);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User created successfully",
    data: result,
  });
});

export const UserControllers = { createStudent };
