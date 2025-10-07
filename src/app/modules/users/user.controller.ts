import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await UserServices.createUserIntoDb(user);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User created successfully",
    data: result,
  });
});

export const UserControllers = { createUser };
