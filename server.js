const express = require("express");
require("dotenv").config();
const app = express();
require("./database/connection");
const TodoRouter = require("./router/todo");
const cors = require("cors");

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

app.use("/api", TodoRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
