import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { Codes, Months, Names } from "./academicSemester.constant";
import { AppError } from "../../errors/AppError";
import status from "http-status";

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: Names,
  },
  code: {
    type: String,
    enum: Codes,
    required: true,
  },
  year: { type: String, required: true },
  startMonths: {
    type: String,
    enum: Months,
  },
  endMonths: {
    type: String,
    enum: Months,
  },
});

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemesterExists) {
    throw new AppError(status.NOT_FOUND, "Semester is already exists !");
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  "academicSemester",
  academicSemesterSchema
);
