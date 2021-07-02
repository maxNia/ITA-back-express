import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nikita.ITA.test@gmail.com',
    pass: '123ASD432zXc',
  },
});
