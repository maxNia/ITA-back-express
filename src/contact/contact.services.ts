import { IAddContact } from './contact.interfaces';
import Contact from './contact.model';

export async function createContact(body: IAddContact) {
  await Contact.create(body);
}

export async function getContacts() {
  return await Contact.findAll({
    attributes: ['uuid', 'name', 'email'],
    raw: true,
  });
}
