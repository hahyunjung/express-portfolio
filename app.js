//Imports
const express = require("express");
const app = express();
const port = 3030;

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//set View
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/info", (req, res) => {
  res.render("info");
});
app.get("/projects", (req, res) => {
  res.render("projects");
});
app.get("/service", (req, res) => {
  res.render("service");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

//Listen on port 3000
app.listen(port, () => console.info(`listening on port ${port}`));
