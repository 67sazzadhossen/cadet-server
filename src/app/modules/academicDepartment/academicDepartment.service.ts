import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDb = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDb = async () => {
  const result = await AcademicDepartment.find().populate("academicFaculty");
  return result;
};

const getSingleAcademicDepartmentsFromDb = async (id: string) => {
  const result = await AcademicDepartment.findById({ _id: id }).populate(
    "academicFaculty"
  );
  return result;
};

const updateAcademicDepartmentFromDb = async (
  id: string,
  payload: TAcademicDepartment
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    { $set: payload }
  );
  return result;
};

export const academicDepartmentServices = {
  createAcademicDepartmentIntoDb,
  getAllAcademicDepartmentFromDb,
  getSingleAcademicDepartmentsFromDb,
  updateAcademicDepartmentFromDb,
};
