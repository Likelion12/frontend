const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://43.202.94.241:8080",
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
