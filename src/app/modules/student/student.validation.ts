import { z } from "zod";

// Enums
const GenderEnum = z.enum(["male", "female", "other"]);
const BloodGroupEnum = z.enum([
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
]);
const StatusEnum = z.enum(["active", "inActive"]).default("active");

// Name Schema
export const NameValidationSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  middleName: z.string().trim().optional(),
  lastName: z.string().min(1, "Last name is required").trim(),
});

// Guardian Schema
export const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

// Local Guardian Schema
export const LocalGuardianValidationSchema = z.object({
  name: NameValidationSchema,
  contactNo: z.string().min(1, "Local guardian contact number is required"),
  relation: z.string().min(1, "Relation with local guardian is required"),
  address: z.string().optional(),
});

// Student Schema
export const StudentValidationSchema = z.object({
  id: z.string().min(1, "Student ID is required"),
  password: z.string().max(20),
  name: NameValidationSchema,
  gender: GenderEnum,
  dateOfBirth: z.string().min(1, "Date of birth is required"), // You can add .regex(...) for strict ISO validation
  email: z.email("Invalid email address"),
  contactNo: z.string().min(1, "Contact number is required"),
  emergencyContactNo: z.string().min(1, "Emergency contact number is required"),
  bloodGroup: BloodGroupEnum.optional(),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  nationality: z.string().optional(),
  religion: z.string().optional(),
  profileImageUrl: z.url("Invalid image URL").optional(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  admissionDate: z.string().optional(), // Add date validation if needed
  academicYear: z.string().optional(),
  classOrGrade: z.string().optional(),
  rollNumber: z.string().optional(),
  section: z.string().optional(),
  isActive: StatusEnum,
  createdAt: z.string().min(1, "Created date is required"),
  updatedAt: z.string().optional(),
  isDeleted: z.boolean(),
});
