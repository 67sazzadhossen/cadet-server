import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import status from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

export const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    try {
      console.log(req.headers.authorization);
      const token = req.headers.authorization;

      // if the token is sent from client
      if (!token) {
        throw new AppError(status.UNAUTHORIZED, "You are not authorized");
      }

      // check if the token is valid

      jwt.verify(
        token,
        config.jwt_access_secret as string,
        function (err, decoded) {
          if (err) {
            throw new AppError(status.UNAUTHORIZED, "You are not authorized");
          }

          req.user = decoded as JwtPayload;
          next();
        }
      );
    } catch (error) {
      next(error);
    }
  };
};
