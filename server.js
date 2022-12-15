const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const articles = require("./views/data.json");
const ejs = require("ejs");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/articles", function (req, res) {
  res.render("pages/index", { articles: articles });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
