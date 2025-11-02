import { Types } from "mongoose";

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TGuardianName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TAdress = {
  permanentAdress: string;
  presentAdress: string;
};
export type TBloodGroup =
  | "A+"
  | "A−"
  | "B+"
  | "B−"
  | "AB+"
  | "AB−"
  | "O+"
  | "O−";

export type TStudent = {
  user: Types.ObjectId;
  id: string;
  profileImage: string;
  name: TName;
  dob: Date;
  email: string;
  gender: "male" | "female" | "other";
  birthCertificateNo: string;
  previousSchool: string;
  libraryCardNo: string;
  address: TAdress;
  phone: string;
  guardianName: TGuardianName;
  guardianPhone: string;
  admissionDate: Date;
  enrolledClasses: string[];
  currentClass: string;
  bloodGroup: TBloodGroup;
};
