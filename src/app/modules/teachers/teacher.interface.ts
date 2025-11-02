import { Types } from "mongoose";
import { TAdress, TBloodGroup, TName } from "../students/student.interface";

export type TTeacher = {
  user: Types.ObjectId;
  id: string;
  profileImage: string;
  name: TName;
  dob: Date;
  email: string;
  gender: "male" | "female" | "other";
  address: TAdress;
  phone: string;
  bloodGroup: TBloodGroup;
};
