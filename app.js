const express = require("express");
const app = express();

//views
const path = rewuire("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listinig to server on port: " + PORT);
});
