import { model, Schema } from "mongoose";
import { TTeacher } from "./teacher.interface";
import { adressSchema, nameSchema } from "../students/student.model";
import { bloodGroups } from "../students/student.const";

const teacherSchema = new Schema<TTeacher>({
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  id: { type: String, required: true },
  profileImage: { type: String, required: true },
  name: { type: nameSchema, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  address: { type: adressSchema, required: true },
  bloodGroup: { type: String, enum: bloodGroups },
});

export const TeacherModel = model<TTeacher>("teacher", teacherSchema);
