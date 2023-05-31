import {DataTypes} from 'sequelize';
import {db} from "../db";

import type {IUserModel} from "../interfaces/models/user";

const UserModel = db.define<IUserModel>("user", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    autoIncrement: true,
    unique: true,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

export default UserModel;
