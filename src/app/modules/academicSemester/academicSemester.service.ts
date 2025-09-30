import status from "http-status";
import { AppError } from "../../errors/AppError";
import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(status.NOT_FOUND, "invalid semester code");
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });
  return result;
};
const updateSingleAcademicSemesterFromDB = async (
  id: string,
  payload: TAcademicSemester
) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(status.NOT_FOUND, "invalid semester code");
  }
  const result = await AcademicSemester.updateOne(
    { _id: id },
    { $set: payload }
  );
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateSingleAcademicSemesterFromDB,
};
