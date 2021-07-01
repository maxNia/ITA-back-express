import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import List from '../list/list.model';
import ListOfContacts from '../listOfContacts/listOfContacts.model';

interface ContactInstance extends Model {
  uuid: string;
  name: string;
  email: string;
  addList: any;
}

const Contact = sequelize.define<ContactInstance>('contacts', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

Contact.belongsToMany(List, {through: ListOfContacts});
List.belongsToMany(Contact, {through: ListOfContacts});

export default Contact;