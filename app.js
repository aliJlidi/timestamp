const time = require('./time');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;



app.get('/api/timestamp/:input', (req,res) => {
  try {
    res.send(time(req.params.input));
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});