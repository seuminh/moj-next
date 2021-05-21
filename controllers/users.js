import bcrypt from "bcryptjs";
import User from "@/models/User";
import ErrorResponse from "@/utils/errorResponse";

export const createUser = async (req, res,next) => {
  if (!req.body.nationalityIDNum) {
    throw new ErrorResponse("Please provide a nationality ID", 400)
  }
  const password = await bcrypt.hash(req.body.nationalityIDNum, 10);
  const user = await User.create({ ...req.body, password });
  res
    .status(201)
    .json({ data: user, success: true, msg: "User created successfully" });
};
