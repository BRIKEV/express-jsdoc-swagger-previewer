/* eslint-disable */
const express = require('express');
const { join } = require('path');
const helmet = require('helmet');
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(compression());

app.use(express.static('dist'));
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () =>
  console.log(`Listening PORT: ${PORT}`)
);