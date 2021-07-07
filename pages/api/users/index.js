import { protect } from "@/middlewares/auth";
import errorHandler from "@/middlewares/errorHandler";
import nc from "next-connect";
const { default: all } = require("@/middlewares/all");

const { getEmployees } = require("controllers/employee");

const handler = nc({onError: errorHandler});

handler.use(all);

// handler.get(protect,getEmployees);
handler.get(getEmployees);

export default handler;
