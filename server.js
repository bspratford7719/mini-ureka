const PORT = process.env.PORT || 3001;
//const path = require("path");
const app = express();
const express = require("express");
const uuid = require('uuid');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });