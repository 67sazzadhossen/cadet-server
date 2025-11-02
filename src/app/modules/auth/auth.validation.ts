import z from "zod";

export const loginValidationSchema = z.object({
  body: z.object({
    id: z.string({ error: "Id is required" }),
    password: z.string({ error: "Password is required" }),
  }),
});
