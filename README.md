# cra-template-koa

# 这是一个基于 cra-template 与 koa 封装的新模板

前端开发并不仅仅开发浏览器里的东西，有时也会需要在开发前端的同时开发 node 端作为中间层。
与默认模板不同的是：这个模板加入了 server 文件夹，并使用 `proxy`字段 将页面请求代理到 node 的 8080 端口, 这样同时开发前端服务和 node 服务

更多细节可查看 `template/server`目录及`template.json`文件

---

This is the official base template for [Create React App](https://github.com/facebook/create-react-app).

If you don't specify a template (for example, `--template typescript`), this template will be used by default.

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
