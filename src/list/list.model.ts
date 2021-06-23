import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database";

interface ListInstance extends Model {
  uuid: string;
  name: string;
}

const List = sequelize.define<ListInstance>('lists', {
  uuid: {
    type: 'VARCHAR(36)',
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

sequelize.sync()
.then(res => console.log('we in'))
.catch(error => console.error(error));

export default List;