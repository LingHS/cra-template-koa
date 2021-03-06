const Koa = require("koa");
const path = require("path");
const router = require("./router");
const errorHandler = require("./middleware/errorHandler");
const koaBody = require("koa-body");
const koaStatic = require("koa-static");
const logger = require("koa-logger");

const app = new Koa();

app.use(logger()); // 日志
app.use(errorHandler); // 错误处理
app.use(koaStatic(path.resolve(__dirname, "..", "build"))); // 静态资源
app.use(koaBody()); // 解析post

app.use(router.routes()).use(router.allowedMethods()); // 后端路由
app.listen(8080, () => console.log(`server is running on port 8080`));
