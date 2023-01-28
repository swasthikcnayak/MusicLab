import express from "express";
import { base_url, port } from "./config/index.js";
import loader from "./loaders/index.js";

const app = express();

loader(app);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${base_url}`);
});

export default app;
