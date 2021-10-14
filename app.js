const express = require('express');
const helmet = require('helmet');

const homePage = require('./view');
const contactRouter = require('./routes/contact');

const app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(contactRouter);

app.get('/', (req, res) => {
  res.send(homePage);
})

module.exports = app;