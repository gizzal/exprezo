const express =require('express');
const app = express();
var welcome = 'Welcome to the server'
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];
app.set('view engine','pug');
app.get('/',(req,res)=>{
  res.render('index', {colors,welcome});
});
app.listen(3000);