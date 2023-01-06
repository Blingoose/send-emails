// import nodemailer from "nodemailer";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import sgMail from "@sendgrid/mail";

// export const sendEmail = asyncWrapper(async (req, res, next) => {
//   let testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.PASSWORD,
//     },
//   });

//   let info = await transporter.sendMail({
//     from: "Blingoose <blingoose@gmail.com>",
//     to: "<staff@example.com>",
//     subject: "Hello World-LAST_ONE-3",
//     html: "<h2>Testing message, can you see me now?</h2>",
//   });

//   res.json(info);
// });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export const sendEmail = asyncWrapper(async (req, res, next) => {
  const msg = {
    to: "andy.katov@icloud.com",
    from: "andy.katov@blingoose.net",
    subject: "This is a test",
    text: "Can you see this message?",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  let info = await sgMail.send(msg);

  res.json(info);
});
