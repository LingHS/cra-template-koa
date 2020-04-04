const Router = require("@koa/router");
const Service = require("./service/index.js");

const router = new Router();

router.get("/hello", Service.home.hello);
// 防止前端 history 路由 404
router.get("*", async (ctx) => {
  ctx.redirect("/index.html");
});
module.exports = router;
