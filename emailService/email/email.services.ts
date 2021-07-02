import { instance as axios } from '../config/axios';
import { transporter } from '../config/nodemailer';
import { IContactBody, IRequestBody } from './email.interfaces';

export async function sendToContactsByListId(body: IRequestBody) {
  let contacts;
  try {
    contacts = await axios.post('/list/getContacts', {id: body.id});
  } catch (err) {
      throw new Error('NOT_FOUND');
  }
  
  if (!contacts) {
    throw new Error('NOT_FOUND');
  }
  const emailsToSend = contacts.data.map((el: IContactBody) => el.email);
  
  const mailOption = {
    from: 'nikita.ITA.test@gmail.com',
    to: emailsToSend,
    subject: body.subject,
    text: body.text,
  };

  await transporter.sendMail(mailOption);
}
