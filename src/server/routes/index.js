const Router = require("koa-router");

const indexControllers = require("../controllers/index");

const router = new Router();


router.get("/", indexControllers.index);

router.get("/", async ctx => {
  ctx.body = {
    status: "success",
    message: "hello, world!"
  };
});

module.exports = router;
