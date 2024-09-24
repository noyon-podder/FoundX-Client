import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email").trim(),
  password: z
    .string()
    .trim()
    .min(6, "Password needs to be at least 6 characters"),
});
