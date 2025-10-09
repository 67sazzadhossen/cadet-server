import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
  {
    admissionRoll: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      required: true,
      enum: ["student", "admin", "teacher"],
    },
    status: {
      type: String,
      required: true,
      enum: ["in-progress", "active", "blocked"],
      default: "in-progress",
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = model<TUser>("User", UserSchema);
