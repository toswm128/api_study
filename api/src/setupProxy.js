const { createProxyMiddleware } = require("http-proxy-middleware");

const key =
  "CQv4pHR7JvEc5P3i%2BVlM6j5NLXUMGXEx%2BparKLfR2GLUAzVYvzGK2o7KUjiBgyXOrhZbT%2F5LmgqLfhz9ILHY3Q%3D%3D";
const url = `http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/sido${key}`;

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://cors-anywhere.herokuapp.com",
      changeOrigin: true,
    })
  );
};
