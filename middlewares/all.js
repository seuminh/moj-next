import nc from "next-connect";

import database from "./database";
import errorHandler from "@/middlewares/errorHandler";

const all = nc({ onError: errorHandler }).use(database);

export default all;
