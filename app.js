const time = require('./time');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
   res.send("<div><a href='/api/timestamp/2015-12-25'>Click here</a></div>") 
});

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