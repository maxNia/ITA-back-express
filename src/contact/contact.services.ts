import { IAddContact, IUpdateContact } from './contact.interfaces';
import Contact from './contact.model';

export async function addContact(body: IAddContact) {
  try {
    await Contact.create(body);
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
