import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, student } = req.body;

    // validation

    // const zodParsedData = StudentValidationSchema.parse(student);

    // will call service function

    const result = await UserServices.createStudentIntoDB(password, student);

    // send response

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  }
);

export const UserControllers = {
  createStudent,
};
