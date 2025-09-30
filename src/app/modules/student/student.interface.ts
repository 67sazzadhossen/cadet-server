import { Model, Types } from "mongoose";

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGender = "male" | "female" | "other";

export type BloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName?: string;
  motherOccupation?: string;
  motherContactNo?: string;
};

export type TLocalGuardian = {
  name: TName;
  contactNo: string;
  relation: string;
  address?: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TName;
  gender: TGender;
  dateOfBirth: string; // ISO format recommended: YYYY-MM-DD
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: BloodGroup;
  presentAddress: string;
  permanentAddress: string;
  nationality?: string;
  religion?: string;
  profileImageUrl?: string;
  guardian: TGuardian;
  localGuardian?: TLocalGuardian;
  admissionDate?: string;
  academicYear?: string;
  classOrGrade?: string;
  rollNumber?: string;
  section?: string;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  createdAt: string;
  updatedAt?: string;
  isDeleted: boolean;
};

export type StudentMethod = {
  isUserExists(id: string): Promise<TStudent>;
};

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethod
>;
