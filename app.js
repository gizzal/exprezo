const express =require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','pug');

var port = process.env.PORT || 3000;
var welcome = 'Welcome to the server'
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

app.get('/',(req,res)=>{
  res.render('index', {colors,welcome});
});
app.post('/hello',(req,res)=>{
  console.dir(req);
  res.json(req.body);
});
app.listen(port);