import nc from "next-connect";

import database from "./database";
import errorHandler from "@/middlewares/errorHandler";

const onNoMatch = (req, res) => {
  res.status(404).json({
    success: false,
    msg: `URL:${req.url} does not work in ${req.method} method`,
  });
};

export const errorHandle = { onError: errorHandler, onNoMatch };

const all = nc(errorHandle).use(database);

export default all;
