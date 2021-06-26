import all from "@/middlewares/all";
import { updatePassword } from "controllers/users";
import ErrorResponse from "@/utils/errorResponse";


const handler = all;

handler.put(async (req, res, next) => {
  // protect middleware
  const { employeeId } = req.query;
  if (!employeeId) throw new ErrorResponse("Please provided employee ID", 400);
  req.user = { id: employeeId };
  next();
}, updatePassword);

export default handler;
