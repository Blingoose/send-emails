import { StatusCodes } from "http-status-codes";
export const errorHandlerMiddleware = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again",
  };

  return res.status(customError.statusCode).json({ errMsg: customError.msg });
};
