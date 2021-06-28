import {v4 as uuid} from 'uuid';
import sequelize from '../config/database';
import { IAddContact, IUpdateContact } from './contact.interfaces';

export async function addContact(body: IAddContact) {
  try {
    const id = uuid();
    const date: string = getDate();
    
    await sequelize.query(
      `INSERT INTO contacts (uuid, name, email, createdAt, updatedAt) VALUES ('${id}', '${body.name}' , '${body.email}', '${date}', '${date}')`
    );
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function updateContactById(body: IUpdateContact, id: string) {
  try {
    const date: string = getDate();

    if (body.name) {
      await sequelize.query(`UPDATE contacts SET name='${body.name}', updatedAt='${date}' WHERE uuid='${id}'`);
    } else if (body.email) {
      await sequelize.query(`UPDATE contacts SET email='${body.email}', updatedAt='${date}' WHERE uuid='${id}'`);
    } else if (body.name && body.email) {
      await sequelize.query(`UPDATE contacts SET name='${body.name}', email='${body.email}', updatedAt='${date}' WHERE uuid='${id}'`);
    } 
  } catch(e: any) {
    console.error(e.message); 
  }
}


function getDate(): string {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}