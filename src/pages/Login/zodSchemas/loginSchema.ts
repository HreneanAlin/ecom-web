import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(8, "Invalid Password").max(30, "Invalid Password"),
})

export type LoginFields = z.infer<typeof loginSchema>
