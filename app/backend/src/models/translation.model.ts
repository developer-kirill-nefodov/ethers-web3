import {DataTypes} from 'sequelize';

import {db} from "../db";

import type {ITranslationModel} from "../interfaces/models/translation";

const TranslationModel = db.define<ITranslationModel>("translations", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    autoIncrement: true,
    unique: true,
  },
  language: {
    type: DataTypes.STRING(2),
    primaryKey: true,
    allowNull: false
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

export default TranslationModel;
