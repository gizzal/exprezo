const express =require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

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

app.use((req,res,next)=>{
  req.somestuff="some stuff !!!"
  console.log('here marina');
  next();
},(req,res,next)=>{
  console.log('here marina 1 and half');
  next();
});

app.use((req,res,next)=>{
  console.log('here marina 2 and '+req.somestuff);
  next();
});

app.get('/',(req,res)=>{
  res.clearCookie('username');
  res.render('index', {colors,welcome});
});
app.get('/hello',(req,res)=>{
  res.render('index', {colors, welcome, name: req.cookies.username});
});
app.post('/hello',(req,res)=>{
  //console.dir(req);
  //res.json(req.body);
  res.cookie('username',req.body.username)
  res.redirect("/hello");
});
app.listen(port,()=>console.log("You are connected to port "+port));