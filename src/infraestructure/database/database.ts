import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'titagonzalez',
  password: '123',
  database: 'app_react_redux',
  logging: false,
});

export default sequelize;
