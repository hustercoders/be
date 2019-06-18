import * as dotenv from "dotenv";
dotenv.config();

import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();
import * as HttpStatus from "http-status-codes";

import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(async connection => {
    console.log("Database connected!");

    app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
      try {
        await next();
      } catch (error) {
        ctx.status =
          error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
        error.status = ctx.status;
        ctx.body = { error };
        ctx.app.emit("error", error, ctx);
      }
    });

    router.get("/*", async ctx => {
      ctx.body = "Hello World!";
    });

    app.use(router.routes());

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.log(error));
