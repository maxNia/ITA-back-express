import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface ContactInstance extends Model {
  id: number;
}

const ListOfContacts = sequelize.define<ContactInstance>('listOfContacts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  }
});

export default ListOfContacts;