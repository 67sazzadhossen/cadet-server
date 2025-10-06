import mongoose from "mongoose";
import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import { AppError } from "../../errors/AppError";
import status from "http-status";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // const result = await StudentModel.create(student);

  //   const student = new Student(studentData);

  //   if (await student.isUserExists(studentData.id)) {
  //     throw new Error("User already exists");
  //   }
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = "student";

  // find academic semester info
  const admissionSemesterInfo = await AcademicSemester.findById(
    studentData.admissionSemester
  );

  if (admissionSemesterInfo) {
    userData.id = await generateStudentId(admissionSemesterInfo);
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(status.BAD_REQUEST, "failed to create user");
    }
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id;

    const newStudent = await Student.create([studentData], { session });

    if (!newStudent) {
      throw new AppError(status.BAD_REQUEST, "failed to create student");
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const UserServices = {
  createStudentIntoDB,
};
