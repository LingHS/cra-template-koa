/**
 * 统一错误处理
 */
module.exports = async (ctx, next) => {
  let status = 0;
  try {
    await next();
    status = ctx.status;
  } catch (err) {
    console.error(err);
    status = 500;
  }
  if (status >= 400) {
    switch (status) {
      case 400:
      case 404:
      case 500:
        // 自定义处理错误方式，通常为上报
        break;
      default:
        break;
    }
  }
  ctx.response.status = status;
};
