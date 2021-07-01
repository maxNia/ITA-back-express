import { Router } from "express";
import nodemailer from 'nodemailer';

const routers = Router();

routers.get('/mail', mailToAll);

async function mailToAll(req: any, res: any, next: any) {
  console.log('hello');
  
  // const transporter = nodemailer.createTransport({
  //   host: 'mail.google.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: 'nikita.ITA.test@gmail.com',
  //     pass: '123ASD432zXc',
  //   },
  //   tls: {
  //     rejectUnauthorized: false,
  //   }
  // });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nikita.ITA.test@gmail.com',
      pass: '123ASD432zXc',
    },
    
  });

  const mailOption = {
    from: 'nikita.ITA.test@gmail.com',
    to: 'max7little11@gmail.com',
    subject: 'hello',
    text: 'hello my friends',
  }

  transporter.sendMail(mailOption)
  .then(function(res) {
    console.log('email sent');
  })
  .catch(function(err) {
    console.error(err);
  })
  res.status(200).send();
}

export default routers;