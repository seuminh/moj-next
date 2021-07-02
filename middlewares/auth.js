const { default: ErrorResponse } = require("@/utils/errorResponse");
const { getSession } = require("next-auth/client");

const protect = async (req, res, next) => {
  const session = await getSession({req});
  if (!session) {
    throw new ErrorResponse("not authorized to access this page", 401);
  }
  req.user = session.user;
  next();
};

export { protect };
