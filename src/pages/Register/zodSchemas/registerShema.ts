import { z } from "zod"

export const registerSchema = z
  .object({
    firstName: z.string().min(2).max(10),
    lastName: z.string().min(2).max(10),
    email: z.string().email(),
    password1: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be at most 30 characters")
      .regex(
        /(?=.*?[A-Z])/,
        "Password must contain at least one upper case letter"
      )
      .regex(
        /(?=.*?[a-z])/,
        "Password must contain at least one lower case letter"
      )
      .regex(/(?=.*?[0-9])/, "Password must contain at least one number")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "Password must contain at least one special character"
      ),

    password2: z.string(),
  })
  .refine(values => values.password1 === values.password2, {
    message: "Passwords don't match",
    path: ["password2"],
  })

export type RegisterFields = z.infer<typeof registerSchema>
