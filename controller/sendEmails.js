import { asyncWrapper } from "../middleware/asyncWrapper.js";
import nodemailer from "nodemailer";

export const sendEmail = asyncWrapper(async (req, res, next) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: "Blingoose <blingoose@gmail.com>",
    to: "<staff@example.com>",
    subject: "Hello World-LAST_ONE-3",
    html: "<h2>Testing message, can you see me now?</h2>",
  });

  res.json(info);
});
