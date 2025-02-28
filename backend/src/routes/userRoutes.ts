import prisma from "../db/prisma";
import express, { Request, Response } from "express";
import {
  userCreateSchema,
  userValidateSchema,
} from "../validation/userValidator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";

const router = express.Router();

// SignUp Route
router.post("/signup", async (req: Request, res: Response): Promise<any> => {
  const validate = userCreateSchema.safeParse(req.body);

  // is the success code fails to do so then it will throw error
  if (!validate.success) {
    return res.status(400).json({
      success: false,
      message: "Validation error " + validate.error,
    });
  }

  try {
    const data = validate.data;

    // Check for the user is already there or not
    const userIsThere = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userIsThere) {
      return res.status(400).json({
        success: false,
        message: "user with this email is already registered",
      });
    }

    // Store the hashed password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // create the user is not present
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        validProof: data.validProof,
        contactInfo: data.contactInfo,
        role: data.role,
      },
    });

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

// SignIn Route
router.post("/signin", async (req: Request, res: Response): Promise<any> => {
  const validate = userValidateSchema.safeParse(req.body);

  if (!validate.success) {
    return res.status(400).json({
      success: false,
      message: "User Validation Failed",
    });
  }

  try {
    const data = validate.data;

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "error founding the user",
      });
    }

    // compare the password
    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "User Authentication failed",
      });
    }

    // user got success on matching the password
    // console.log(process.env.JWT_SECRET_KEY);

    // const secret_key: string = process.env.JWT_SECRET_KEY || "";

    // @ts-ignore
    const secret_key: string = process.env.JWT_SECRET_KEY;

    if (typeof secret_key === "undefined") {
      throw new Error("SECRET KEY NOT AVAILABLE");
    }

    const token = jwt.sign(
      {
        _id: user.userId,
        email: user.email,
      },
      secret_key,
      {
        expiresIn: "1h",
      }
    );

    console.log(token, " ", secret_key);

    res.status(200).json({
      success: true,
      message: "user validated",
      token: token,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err,
    });
  }
});



export default router;
