const env = process.env.NODE_ENV || 'local';

module.exports = {
  [env]: {
    dialect: process.env.DB_DIALECT || "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    migrationStorageTableName: 'SequelizeMeta'
  }
};
