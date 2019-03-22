const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/create", { target: "http://localhost:5000" }));
  app.use(proxy("/login", { target: "http://localhost:5000" }));
  app.use(proxy("/logout", { target: "http://localhost:5000" }));
  app.use(proxy("/upload", { target: "http://localhost:5000" }));
  app.use(proxy("/images", { target: "http://localhost:5000" }));
  app.use(proxy("/image/*", { target: "http://localhost:5000" }));
  app.use(proxy("/product_submit", { target: "http://localhost:5000" }));
  app.use(proxy("/fetch_products", { target: "http://localhost:5000" }));
};
