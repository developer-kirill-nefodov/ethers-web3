import {Optional, Model} from "sequelize";
import {ModelAttributes} from "./";

export type INamePermissions = 'block_user' | 'delete_user' | 'assign_roles';

export interface IRole {
  name: 'ADMIN' | 'USER' | 'MODERATOR' | 'CUSTOM_ROLE'
  permissions: {
    [key in INamePermissions]?: boolean
  }
}

interface IUserModelData extends ModelAttributes {
  email: string
  role: IRole
  password: string
}

interface IRoleModelData extends ModelAttributes, IRole {}

export interface IUserModel extends Model<IUserModelData, Optional<IUserModelData, 'id'>>, IUserModelData {}
export interface IRoleModel extends Model<IRoleModelData, Optional<IRoleModelData, 'id'>>, IRoleModelData {}
