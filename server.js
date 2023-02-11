const exphbs = require("express-handlebars");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const models = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;


const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, "public")));

// to use routes accross all
app.use(routes);



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});