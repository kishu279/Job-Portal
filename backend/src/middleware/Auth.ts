import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
import { Request, Response, NextFunction } from "express";

// Extending the Resquest Object
declare global {
  namespace Express {
    interface Request {
      _userId?: string;
    }
  }
}

// Type Guard
function isJwtPayload(decoded: string | JwtPayload): decoded is JwtPayload {
  return (decoded as JwtPayload)._id !== undefined; // Typs assertion
}

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const bearerToken = req.headers["authorization"];

  if (!bearerToken) {
    return res.status(400).json({
      success: false,
      message: "Token not found",
    });
  }

  try {
    const token: string = bearerToken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);

    if (!decoded) {
      return res.status(400).json({
        success: false,
        message: "Sign in again",
      });
    }

    // successfully decoded
    if (isJwtPayload(decoded)) {
      req._userId = decoded._id;
    }

    next();
  } catch (err: any) {
    return res.status(400).json({
      success: false,
      message: "Sign in again",
    });
  }
};

export default auth;
