const express = require("express");
const app = express();

//views
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes
const listingsRouter = require("./routes/listingsRouter");
app.use("/listings", listingsRouter);
const devsRouter = require("./routes/devsRouter");
app.use("/devs", devsRouter);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("listening to server on port: " + PORT);
  });
} catch (err) {
  console.error("Server failed to start:", err);
}
