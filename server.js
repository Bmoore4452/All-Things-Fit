const exphbs = require('express-handlebars');
const express = require('express');
const routes = require('./controllers/index');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("server is up");
    })
})