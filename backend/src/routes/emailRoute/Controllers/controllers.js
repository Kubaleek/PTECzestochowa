// Controllers/controllers.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: "ptewebsite22@gmail.com", // Sender's email
        to: to || "renatasiwiec71@gmail.com", // Recipient's email (default for testing)
        subject: subject || "WIADOMOSC OGOLNA", // Email subject (default for testing)
        text: text || "Testowa wiadomosc. Pls dzialaj" // Email text (default for testing)
    };

    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use SSL
        auth: {
            user: process.env.EMAIL_USER, // Email user
            pass: process.env.EMAIL_PASSWORD // Email password
        }
    });

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
};
