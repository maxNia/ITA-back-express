import Contact from '../contact/contact.model';
import { IUpdateList } from './list.interfaces';
import List from './list.model';

export function createList(body: string) {
  List.create(body);
}

export async function getLists() {
  return await List.findAll({
    attributes: ['uuid', 'name'],
    raw: true,
  });
}

export async function getContactsByListId(id: string) {
  const list = await List.findByPk(id);

  if (!list) {
    throw new Error('NOT_FOUND');
  }
  await list.getContacts({raw: true, attributes: ['name', 'email']});
}

export async function addContact(body: IUpdateList) {
  const list = await List.findByPk(body.listId);
  const contact = await Contact.findByPk(body.contactId);

  if (!list || !contact) {
    throw new Error('NOT_FOUND');
  }
  list.addContact(contact);
}
