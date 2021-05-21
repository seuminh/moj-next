import nc from "next-connect";
const { default: all } = require("@/middlewares/all");

const { getEmployees } = require("controllers/employee");

const handler = nc();

handler.use(all);

handler.get(getEmployees);

export default handler;
