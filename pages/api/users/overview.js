import nc from "next-connect";
const { default: all } = require("@/middlewares/all");

const { getOverviewEmployees } = require("controllers/employee");

const handler = nc();

handler.use(all);

handler.get(getOverviewEmployees);

export default handler;
