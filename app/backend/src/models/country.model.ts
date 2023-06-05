import {DataTypes} from 'sequelize';
import {db} from "../db";

import type {ICountryModel} from "../interfaces/models/country";

const CountryModel = db.define<ICountryModel>("countries", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    autoIncrement: true,
    unique: true,
  },
  countries: {
    type: DataTypes.STRING(30),
    primaryKey: true,
    allowNull: false,
    validate: {max: 1, min: 30},
  },
  iso2: {
    type: DataTypes.STRING(2),
    primaryKey: true,
    allowNull: false,
    validate: {max: 2, min: 2}
  },
  iso3: {
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false,
    validate: {max: 3, min: 3}
  },
  lang: {
    type: DataTypes.STRING(30),
    primaryKey: true,
    allowNull: false,
    validate: {max: 1, min: 30}
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

export default CountryModel;
