import { all } from "@/middlewares/index";
import User from "@/models/User";
import ErrorResponse from "@/utils/errorResponse";
import upload from "@/middlewares/uploadFile";
import nc from "next-connect";
const handler = nc();

handler.use(all);

handler.post(
  async (req, res, next) => {
    // protect middleware
    const { employeeId } = req.query;
    if (!employeeId)
      throw new ErrorResponse("Please provided employee ID", 400);
    req.user = { id: employeeId };
    next();
  },
  upload.single("img-profile"),
  async (req, res, next) => {
    if (!req.file) {
      throw new ErrorResponse("Image not found", 400);
    }
    const user = await User.findById(req.user.id);
    user.photo = ("/uploads/img-profile/" + req.file.filename).toString();
    await user.save();
    res.status(200).json({ success: true, data: { user } });
  }
);

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
