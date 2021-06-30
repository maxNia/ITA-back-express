import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface ListInstance extends Model {
  uuid: string;
  name: string;
  getContacts: any;
  addContact: any;
}

const List = sequelize.define<ListInstance>('lists', {
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
    unique: true,
  },
});



export default List;
