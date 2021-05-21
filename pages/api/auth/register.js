import all from "@/middlewares/all";
import { createUser } from "controllers/users";

const handler = all;

handler.post(createUser);

export default handler;
