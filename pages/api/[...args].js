import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createProxyMiddleware({
  target: "http://64.225.118.43:8080", //the data server
  changeOrigin: true
});
