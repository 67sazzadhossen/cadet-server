import { StudentModel } from "./student.model";

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find().populate("user");
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
};
