const exphbs = require("express-handlebars");
const express = require("express");
const routes = require("./controllers/index");
const sequelize = require("./config/connection");
const models = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("landingpage");
});



// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, "./public")));
// app.use(routes);

app.use(express.static(__dirname + "/public"));
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("server is up");
  });
});
