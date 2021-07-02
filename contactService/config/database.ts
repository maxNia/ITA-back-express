import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ITAdb', 'root', '12345678', {
  dialect: 'mysql',
  host: '127.0.0.1'
});

sequelize.sync()
.then(res => console.log('we in'))
.catch(error => console.error(error));

export default sequelize;
