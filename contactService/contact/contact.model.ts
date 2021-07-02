import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

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

export default Contact;