// pages/api/sendLeadEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'robinsxxpaul@gmail.com',      // Your email here
          pass: 'yayr bfrz famz yrwt'     // App-specific password (not Gmail password)
        }
      });

      await transporter.sendMail({
        from: 'your_email@gmail.com',
        to: 'your_email@gmail.com',
        subject: `New lead from ${name}`,
        html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`
      });

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
