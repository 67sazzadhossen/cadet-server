import { model, Schema } from "mongoose";
import { TAdress, TGuardianName, TName, TStudent } from "./student.interface";
import { bloodGroups } from "./student.const";

export const adressSchema = new Schema<TAdress>({
  permanentAdress: { type: String, required: true },
  presentAdress: { type: String, required: true },
});

export const nameSchema = new Schema<TName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
export const guardianNameSchema = new Schema<TGuardianName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

export const studentSchema = new Schema<TStudent>({
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  profileImage: { type: String, required: true },
  name: nameSchema,
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  birthCertificateNo: { type: String, required: true },
  previousSchool: {
    type: String,
    required: true,
    default: "Gazipur Shahin Cadet is first school",
  },
  libraryCardNo: { type: String, required: true },
  address: adressSchema,
  phone: { type: String, required: true },
  guardianName: guardianNameSchema,
  guardianPhone: { type: String, required: true },
  rollNo: { type: String, required: true },
  admissionDate: { type: Date, required: true },
  enrolledClasses: { type: [String], default: [] },
  currentClass: { type: String, required: true },
  bloodGroup: { type: String, enum: bloodGroups, required: true },
});

export const StudentModel = model<TStudent>("Student", studentSchema);
