export interface IRequestBody {
  id: string;
  subject: string;
  text: string;
}

export interface IContactBody {
  email: string;
  'listOfContacts.contactUuid': string;
  'listOfContacts.createdAt': string;
  'listOfContacts.id': number;
  'listOfContacts.listUuid': string;
  'listOfContacts.updatedAt': string;
  name: string;
}
