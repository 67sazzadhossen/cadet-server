import z from "zod";

export const userValidationSchema = z.object({
  password: z
    .string({})
    .max(20, { message: "Password can not be more than 20 charecters" })
    .optional(),
});
