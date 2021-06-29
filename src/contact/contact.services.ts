import { IAddContact, IUpdateContact } from './contact.interfaces';
import Contact from './contact.model';

export async function createContact(body: IAddContact) {
  try {
    await Contact.create(body);
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function getAll() {
  try {
    return await Contact.findAll({
      attributes: ['uuid', 'name', 'email'],
      raw: true,
    });
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
