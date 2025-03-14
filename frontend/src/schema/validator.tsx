import { z } from "zod";

const RoleEnum = z.enum(["applicant", "hr"]);

const UserCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invlalid Email Format"),
  // password: z
  //   .string()
  //   .min(6, "Password length must be atleast 6 characters")
  //   .max(20, "Password length must be upmost 20 characters"),
  isValidated: z.boolean(),
  validProof: z
    .string()
    .length(12, "Valid Proof must be exactly of lenght 12 characters"),
  contactInfo: z.string().length(10, "10 numbers are required"),
  role: RoleEnum,
});

const userValidateSchema = z.object({
  email: z.string().email("Invalid Email Format"),
  password: z
    .string()
    .min(6, "Password length must be atleast 6 character")
    .max(20, "Password length must be upmost 20 characters"),
});

export { UserCreateSchema, userValidateSchema };
