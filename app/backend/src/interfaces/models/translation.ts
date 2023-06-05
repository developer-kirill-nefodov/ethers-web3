import {Optional, Model} from "sequelize";
import {ModelAttributes} from "./";

type JSONValue = { [x: string]: string | number | boolean };

interface ITranslationModelData extends ModelAttributes {
  language: string;
  data: JSONValue;
}

export interface ITranslationModel extends Model<ITranslationModelData, Optional<ITranslationModelData, 'id'>>, ITranslationModelData {}
