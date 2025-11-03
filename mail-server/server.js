// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// إعدادات البريد
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Ahmed185taha@gmail.com",  // ← إيميلك
    pass: "caitbjjpfarofvtg"         // ← هنا كلمة سر التطبيق من Google
  },
});

// راوت إرسال الإيميل
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "mohamedasmaa903@gmail.com", // ← البريد اللي هيوصله الإيميل (ممكن تغيّره)
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).send({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Failed to send email" });
  }
});

// تشغيل السيرفر
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
