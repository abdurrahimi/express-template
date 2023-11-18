import { Sequelize } from 'sequelize';
import dbConfig from './database.cjs';

const sequelize = new Sequelize(dbConfig);

export default sequelize;