import {ColumnReference} from "sequelize";

export interface ModelAttributes {
  id: ColumnReference
  created_at?: Date;
  updated_at?: Date;
}
