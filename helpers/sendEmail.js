import "dotenv/config";
import nodemailer from "nodemailer";

const sendMail = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USERNAME,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

const message = {
  from: '"Tim Cook" <tim@apple.com>', 
  to: ["vmudrij0508@gmail.com"],
  subject: "iPhone Sale Tonight",
  html: `<h1 style="color: red;">Click on link and get 90% discount on new iPhone 15 Pro Max</h1>`,
  text: `Click on link and get 90% discount on new iPhone 15 Pro Max`,
};

const sendEmail = async () => {
  try {
    const info = await sendMail.sendMail(message);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

export default sendEmail;