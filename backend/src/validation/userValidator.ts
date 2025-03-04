import { z } from "zod";

const RoleEnum = z.enum(["applicant", "hr"]); // enums that are created for validation of the user in role
type RoleEnumType = z.infer<typeof RoleEnum>;

export const userCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid Email Format"),
  password: z
    .string()
    .min(6, "Password length must be atleast 6 characters")
    .max(20, "Password length must be upmost 20 characters"),
  validProof: z
    .string()
    .length(12, "Valid Proof must be exactly of lenght 12 characters"),
  contactInfo: z.string().length(10, "10 numbers are required"),
  role: RoleEnum,
});

// export type userCreateInput = z.infer<typeof userCreateSchema>; // this is the type that can be used over the project

export const userValidateSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password length must be atleast 6 characters")
    .max(20, "Password length must be upmost 20 characters"),
});

// export type EmailPasswordType = z.infer<typeof userValidateSchema>;
