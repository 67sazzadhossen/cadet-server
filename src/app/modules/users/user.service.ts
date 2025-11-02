import mongoose from "mongoose";
import { User } from "./user.model";
import { AppError } from "../../errors/AppError";
import status from "http-status";
import { TStudent } from "../students/student.interface";
import { TUser } from "./user.interface";
import config from "../../config";
import { StudentModel } from "../students/student.model";
import { TTeacher } from "../teachers/teacher.interface";
import { TeacherModel } from "../teachers/teacher.model";

const createStudentIntoDB = async (payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.id = "01";
  userData.role = "student";
  userData.password = config.default_password;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(status.BAD_REQUEST, "Faiiled to create user");
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newStudent = await StudentModel.create([payload], { session });

    if (!newStudent) {
      throw new AppError(status.BAD_REQUEST, "Faiiled to create student");
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

const createTeacherIntoDB = async (payload: TTeacher) => {
  const userData: Partial<TUser> = {};
  userData.id = payload.id;
  userData.role = "teacher";
  userData.password = config.default_password;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(status.BAD_REQUEST, "Failed to create user");
    }

    payload.user = newUser[0]._id;
    const newTeacher = await TeacherModel.create([payload], { session });

    await session.commitTransaction();
    await session.endSession();

    if (!newTeacher) {
      throw new AppError(status.BAD_REQUEST, "Failed to create teacher");
    }
    return newTeacher;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const UserServices = { createStudentIntoDB, createTeacherIntoDB };
