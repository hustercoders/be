import * as Koa from "koa";
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {
    console.log("Database connected!");
    router.get('/*', async (ctx) => {
        ctx.body = 'Hello World!';
    });
    
    app.use(router.routes());
    
    app.listen(3000);
    
    console.log('Server running on port 3000');
}).catch(error => console.log(error));
