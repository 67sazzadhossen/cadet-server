import z from "zod";

export const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string(),
    academicFaculty: z.string(),
  }),
});

export const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
});
