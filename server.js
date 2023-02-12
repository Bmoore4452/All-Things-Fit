const exphbs = require("express-handlebars");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const models = require("./models");
// const path = require("path")
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session({
  secret: "my secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore ({
    db: sequelize
  })
}))

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