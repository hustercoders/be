import * as dotenv from "dotenv";
dotenv.config();

import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(async connection => {
    console.log("Database connected!");
    router.get("/*", async ctx => {
      ctx.body = "Hello World!";
    });

    app.use(router.routes());

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.log(error));
