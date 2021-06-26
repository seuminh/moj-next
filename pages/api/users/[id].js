import nc from "next-connect";
import { getSession } from "next-auth/client";
import { errorHandle } from "@/middlewares/all";
import { all } from "@/middlewares/index";
import {
  getSingleEmployee,
  updateEmployee,
  updateRole
} from "controllers/employee";
import ErrorResponse from "@/utils/errorResponse";
import User from "@/models/User";

const handler = nc(errorHandle);

handler.use(all);

handler.get(getSingleEmployee);

handler.put(updateEmployee);
handler.put(
  "/role",
  async (req, res, next) => {
    const session = getSession();
    if (!session.user) {
      throw new ErrorResponse("Not Authorized", 401);
    }
    const user = await User.findById(user.id);
    if (!user) {
      throw new ErrorResponse("Not Authorized", 401);
    }
    req.user = { id: req.user._id, role: req.user.role };
    next();
  },
  async(req,res,next)=>{
    if(req.role!=='admin'){
      throw new ErrorResponse("Not Authorized", 401);
    }
    next();
  },
  updateRole
);

export default handler;
