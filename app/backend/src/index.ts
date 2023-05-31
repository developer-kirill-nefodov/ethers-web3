import 'dotenv/config';
import express from 'express';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {db, redis} from "./db";
import {routers} from "./routers";

const createServer = async () => {
  const app = express();
  const port = process.env.PORT || 3001;

  app.use(cors({credentials: true, origin: [process.env.FRONEND_URL]}));
  app.use(bodyParser.json());
  app.use(cookieParser());

  await redis.connect();

  await db.authenticate()
    .then(() => console.log('\x1b[36m[<<PostgreSQL connected>>]\x1b[0m'))
    .catch((e) => console.log('\x1b[31m[<<Error Connected>>]\x1b[0m: ', e.message));

  app.use('/api', routers());

  app.listen(port, () => {
    console.log(`\x1b[34m[<<Successfully>>]\x1b[0m: server works - http://localhost:${port}`);
  });
}

createServer()
  .catch((e) => {
    console.log('[\x1b[31m Error \x1b[0m]: server error - ', e.message);
    process.exit(1);
  });
