const {
  createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://195.35.14.176:5000',
      changeOrigin: true,
    })
  );
};