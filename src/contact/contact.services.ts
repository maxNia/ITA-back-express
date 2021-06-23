import {v4 as uuidv4} from 'uuid';
import { IAddContact, IUpdateContact } from './contact.interfaces';
import Contact from './contact.model';

export async function addContact(body: IAddContact) {
  try {
    const {name, email} = body;
    const uuid = uuidv4();
    
    await Contact.create({uuid, name, email}); 
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function updateContactById(body: IUpdateContact, id: string) {
  try {
    await Contact.update(body, {
      where: {
        uuid: id,
      }
    });
  } catch(e: any) {
    console.error(e.message); 
  }
}
