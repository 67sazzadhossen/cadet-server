import { AcademicFaculty } from "./academicFaculty.model";
import { TAcademicFaculty } from "./academincFaculty.interface";

const createAcademicFacultyIntoDb = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyFromDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDb = async (id: string) => {
  const result = await AcademicFaculty.findById({ _id: id });
  return result;
};

const updateAcademicFacultyFromDb = async (
  id: string,
  payload: TAcademicFaculty
) => {
  const result = await AcademicFaculty.updateOne(
    { _id: id },
    { $set: payload }
  );
  return result;
};

export const academicFacultyServices = {
  createAcademicFacultyIntoDb,
  getAllAcademicFacultyFromDb,
  getSingleAcademicFacultyFromDb,
  updateAcademicFacultyFromDb,
};
