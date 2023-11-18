import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _user from  "./user.js";

export default function initModels(sequelize) {
  const user = _user.init(sequelize, DataTypes);


  return {
    user,
  };
}
