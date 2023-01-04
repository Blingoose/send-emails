import { asyncWrapper } from "../middleware/asyncWrapper.js";
export const sendEmail = asyncWrapper(async (req, res, next) => {
  res.send("Send email func");
});
