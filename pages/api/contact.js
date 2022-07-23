import nodemailer from "nodemailer";
import { DotenvConfigOutput } from "dotenv";
import { send } from "process";

export default function handler(req, res) {
  const PASSWORD = process.env.password;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kadeportfolio1@gmail.com",
      pass: `${PASSWORD}`,
    },
  });

  send();

  async function send() {
    console.log("whole req", req.body);
    console.log("firstName", req.body.firstName);
    console.log("lastName", req.body.lastName);
    console.log("text", req.body.message);

    const result = await transporter.sendMail({
      from: "kadeportfolio1@gmail.com",
      to: `kadeesterline@gmail.com`,
      subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
      text: `${req.body.message}`,
    });
    console.log(JSON.stringify(result, null, 4));
  }
  //   const mailData = {
  //     from: "kadeportfolio1@gmail.com",
  //     to: "kadeesterline@gmail.com",
  //     subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
  //     text: req.body.message,
  //     html: <div>{req.body.message}</div>,
  //   };

  //   transporter.sendMail(mailData, function (err, info) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(info);
  //     }
  //   });

  res.status(200);
}
