const Router = require("@koa/router");
const Service = require("./service/index.js");

const router = new Router();

router.get("/hello", Service.home.hello);
router.get("*", async (ctx) => {
  ctx.redirect("/index.html");
});
module.exports = router;
