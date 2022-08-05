import nodemailer from "nodemailer";
import process from "process";

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  // const PASSWORD = process.env.password;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kadeportfolio1@gmail.com",
      pass: `${process.env.PASSWORD}`,
    },
  });

  send();

  async function send() {
    // console.log("whole req", body);
    // console.log("firstName", body.firstName);
    // console.log("lastName", body.lastName);
    // console.log("text", body.message);

    const result = await transporter.sendMail({
      from: "kadeportfolio1@gmail.com",
      to: `kadeesterline@gmail.com`,
      subject: `Message from ${body.firstName} ${body.lastName}`,
      text: `
      Return address: ${body.email} 
      From: ${body.firstName} ${body.lastName}
      Message: ${body.message}
      `,
      // text: `${req.body.message}`
    });
    // console.log(JSON.stringify(result, null, 4));
  }

  res.status(200);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
