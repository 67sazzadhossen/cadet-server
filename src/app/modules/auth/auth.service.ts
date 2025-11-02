import status from "http-status";
import { AppError } from "../../errors/AppError";
import { User } from "../users/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const loginUser = async (payload: TLoginUser) => {
  const isUserExists = await User.findOne({ id: payload.id });

  if (!isUserExists) {
    throw new AppError(status.NOT_FOUND, "User not found");
  }
  const isUserIsDeleted = isUserExists?.isDeleted;

  if (isUserIsDeleted) {
    throw new AppError(status.NOT_FOUND, "User is deleted");
  }
  const isUserBlocked = isUserExists?.status === "blocked";

  if (isUserBlocked) {
    throw new AppError(status.FORBIDDEN, "User is blocked");
  }

  // checking password is the password is correct

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExists.password
  );

  if (!isPasswordMatched) {
    throw new AppError(status.FORBIDDEN, "Incorrect password");
  }

  const jwtPayload = {
    userId: isUserExists.id,
    role: isUserExists.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "10d",
  });
  return {
    accessToken,
    needPasswordChanged: isUserExists.needsPasswordChange,
  };
};

export const AuthServices = {
  loginUser,
};
