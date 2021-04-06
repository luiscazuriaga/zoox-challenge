import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import authConfig from "@configs/authConfig";

const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Error => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing.");
  }

  const [, token] = authHeader.split(" ");

  try {
    jwt.verify(token, authConfig.secret);

    return next();
  } catch {
    throw new Error("Invalid JWT token");
  }
};

export default ensureAuthenticated;
