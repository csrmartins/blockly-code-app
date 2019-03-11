const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
  console.log('get route');
  res.render('index.ejs')
})

app.get('/builder', (req,res) => {
  console.log('builder route');
  res.render('builder.ejs')
})

app.listen(PORT, () => {
  console.log('im listening');
})
