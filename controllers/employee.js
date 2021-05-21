import User from "@/models/User";
import ErrorResponse from "@/utils/errorResponse";

export const getEmployees = async (req, res) => {
  const { nationalityIDNum } = req.query;
  let reqQuery;
  if (nationalityIDNum) {
    reqQuery = { nationalityIDNum };
  }
  const users = await User.find(reqQuery);
  res
    .status(200)
    .json({
      success: true,
      msg: nationalityIDNum ? `User with ${nationalityIDNum}` : "Find all user",
      data: users,
    });
};

export const getSingleEmployee = async (req, res, next) => {
  const { id } = req.query;
  if (!id) throw new ErrorResponse("Please provided employee ID", 400);
  const user = await User.findById(id);
  console.log(user)
  res.status(200).json(user);
};

export const updateEmployee = async (req, res, next) => {
  const { id } = req.query;
  const dataUpdate = req.body;
  if (!id) throw new ErrorResponse("Please provided employee ID", 400);
  const user = await User.findByIdAndUpdate(id, dataUpdate, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(user);
};
