import z from "zod";
import { Codes, Months, Names } from "./academicSemester.constant";

export const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(Names),
    code: z.enum(Codes),
    year: z.string(),
    startMonth: z.enum(Months),
    endMonth: z.enum(Months),
  }),
});
