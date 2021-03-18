import { all } from "@/middlewares/index";
import User from "@/models/User";
import ErrorResponse from "@/utils/errorResponse";

const handler = all;

handler
  .get(async (req, res, next) => {
    const { employeeId } = req.query;
    if (!employeeId)
      throw new ErrorResponse("Please provided employee ID", 400);
    const user = await User.findById(employeeId);
    res.status(200).json(user);
  })
  .put(async (req, res, next) => {
    const { employeeId } = req.query;
    const dataUpdate = req.body;
    if (!employeeId)
      throw new ErrorResponse("Please provided employee ID", 400);
    const user = await User.findByIdAndUpdate(employeeId, dataUpdate, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(user);
  });

export default handler;
