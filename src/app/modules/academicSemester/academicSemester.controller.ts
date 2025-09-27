/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const { password, student } = req.body;

    // validation

    // const zodParsedData = StudentValidationSchema.parse(student);

    // will call service function

    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body
    );

    // send response

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Academic semester is created successfully",
      data: result,
    });
  }
);

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterServices.getAllAcademicSemesterFromDB();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Academic semester is retrieved successfully",
      data: result,
    });
  }
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result =
      await AcademicSemesterServices.getSingleAcademicSemesterFromDB(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Academic semester is retrieved successfully",
      data: result,
    });
  }
);
const updateSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result =
      await AcademicSemesterServices.updateSingleAcademicSemesterFromDB(
        id,
        req.body
      );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Academic semester is updated successfully",
      data: result,
    });
  }
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
