const Koa = require("koa");
const path = require("path");
const router = require("./router");
const errorHandler = require("./middleware/errorHandler");
const koaBody = require("koa-body");
const koaStatic = require("koa-static");
const logger = require("koa-logger");

const app = new Koa();

app.use(logger());
app.use(errorHandler);
app.use(koaStatic(path.resolve(__dirname, "..", "build")));
app.use(koaBody());

app.use(router.routes());
app.listen(8080, () => console.log(`server is running on port 8080`));
