import z from "zod";

export const academicFacultyValidation = z.object({
  name: z.string(),
});
