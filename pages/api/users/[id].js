import { errorHandle } from "@/middlewares/all";
import { all } from "@/middlewares/index";
import { getSingleEmployee, updateEmployee } from "controllers/employee";
import nc from "next-connect";
const handler = nc(errorHandle);

handler.use(all);

handler.get(getSingleEmployee);

handler.put(updateEmployee);

export default handler;
