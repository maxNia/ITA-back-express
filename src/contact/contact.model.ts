import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface ContactInstance extends Model {
  uuid: string;
  name: string;
  email: string;
}

const Contact = sequelize.define<ContactInstance>('contacts', {
  uuid: {
    type: 'VARCHAR(36)',
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

sequelize.sync()
.then(res => console.log('we in'))
.catch(error => console.error(error));

export default Contact;