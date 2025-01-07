import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

dotenv.config();
const router = express.Router();

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());

let EMAIL_USER = "redhand1630@getMaxListeners.com";
let EMAIL_PASS = "Rh@16307";
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log("Verification failed:", error);
    } else {
        console.log("Ready to send emails");
    }
});

router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }
    
    const name = `${firstName} ${lastName}`;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p> <p>Email: ${email}</p> <p>Phone: ${phone || 'N/A'}</p> <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(500).json({ error: "Error sending message." });
        } else {
            res.status(200).json({ status: "Message Sent" });
        }
    })
})

app.use('/', router);
app.listen(8080, () => console.log('Server Running on port 8080'));