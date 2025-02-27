import prisma from "../db/prisma";
import express, { Request, Response } from "express";
import { userCreateSchema } from "../validation/userValidator";
import { z } from "zod";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response): Promise<any> => {
  const validate = userCreateSchema.safeParse(req.body);

  // is the success code fails to do so then it will throw error
  if (!validate.success) {
    return res.status(400).json({
      success: false,
      message: "Validation error " + validate.error,
    });
  }

  const data = validate.data;
  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        validProof: data.validProof,
        contactInfo: data.contactInfo,
        role: data.role,
      },
    });

    console.log(user);

    res.status(200).json({
      success: true,
      message: "User created Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err,
    });
  }
});

export default router;
