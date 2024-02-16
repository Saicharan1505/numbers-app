const express = require('express'); 
const cors = require('cors')
const { add } = require("./arithmetica");
const app = express(); 
app.use(cors());
const port = 3000;


app.get('/', (req, res) => {
  res.send('Arithmetic service- last updated TYPE-THE-DATE-AND-TIME-HERE');
});

app.get('/add/:number1/:number2', (req, res) => {
  const number1 = parseFloat(req.params.number1);
  const number2 = parseFloat(req.params.number2);
  const sum = number1 + number2;
  
  res.json({ result: sum });
});

app.listen(port);