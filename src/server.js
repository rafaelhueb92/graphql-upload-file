const { apolloUploadKoa } = require("apollo-upload-server");
const app = new Koa();              
const router = new KoaRouter();
// Middleware to support file upload for graphql
app.use(apolloUploadKoa());

