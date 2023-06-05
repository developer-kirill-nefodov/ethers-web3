  import {DataTypes} from 'sequelize';

  import {db} from "../db";

  import type {IRoleModel} from "../interfaces/models/user";

  const RoleModel = db.define<IRoleModel>("role", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.ENUM('ADMIN', 'USER', 'MODERATOR', 'CUSTOM_ROLE'),
      allowNull: false,
      primaryKey: true,
    },
    permissions: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

  export default RoleModel;
