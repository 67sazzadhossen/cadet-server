import { Schema, model } from "mongoose";
import {
  StudentMethod,
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TName,
  TStudent,
} from "./student.interface";
import { AcademicSemester } from "../academicSemester/academicSemester.model";

const NameSchema = new Schema<TName>({
  firstName: { type: String, required: true, trim: true },
  middleName: { type: String, trim: true },
  lastName: { type: String, required: true, trim: true },
});

const GuardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const LocalGuardianSchema = new Schema<
  TLocalGuardian,
  StudentModel,
  StudentMethod
>({
  name: NameSchema,
  contactNo: { type: String, required: true },
  relation: { type: String, required: true },
  address: { type: String },
});

const StudentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },

    name: {
      type: NameSchema,
      required: [true, "Name is required"],
      trim: true,
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: "Gender must be 'male', 'female', or 'other'",
      },
      required: [true, "Gender is required"],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required"],
    },
    emergencyContactNo: {
      type: String,
      required: [true, "Emergency contact number is required"],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        message: "Invalid blood group",
      },
    },
    presentAddress: {
      type: String,
      required: [true, "Present address is required"],
    },
    permanentAddress: {
      type: String,
      required: [true, "Permanent address is required"],
    },
    nationality: { type: String },
    religion: { type: String },
    profileImageUrl: { type: String },
    guardian: {
      type: GuardianSchema,
      required: [true, "Guardian information is required"],
    },
    localGuardian: {
      type: LocalGuardianSchema,
      required: [true, "Local Guardian is required"],
    },
    admissionDate: { type: String },
    academicYear: { type: String },
    admissionSemester: { type: Schema.Types.ObjectId, ref: AcademicSemester },
    classOrGrade: { type: String },
    rollNumber: { type: String },
    section: { type: String },
    createdAt: {
      type: String,
      required: [true, "Created date is required"],
    },
    updatedAt: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual
StudentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// query middleware
StudentSchema.pre("find", function (next) {
  // console.log(this);
  this.find({ isDeleted: { $ne: true } });
  next();
});
StudentSchema.pre("findOne", function (next) {
  // console.log(this);
  this.find({ isDeleted: { $ne: true } });
  next();
});

StudentSchema.methods.isUserExists = async (id: string) => {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>("Student", StudentSchema);
