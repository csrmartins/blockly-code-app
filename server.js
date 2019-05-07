const express = require('express');
const app = express();

const authController = require('./controllers/authController');
const projectController = require('./controllers/projectController');
const builderController = require('./controllers/builderController');
const userController = require('./controllers/userController');
const lessonController = require('./controllers/lessonController');




const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const session = require('express-session');


const PORT = process.env.PORT || 3000;

app.use(session({
  secret: "THIS IS THE SESSION MESSAGE",
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.json({ limit: '10mb'}))


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

//Set Request Size Limit
// app.use(express.limit(100000000));

app.use(express.static('public'));


app.get('/', (req,res) => {
  console.log('get route');
  res.render('index.ejs')
})

app.get('/register', (req,res) => {
  console.log('register GET route');
  res.render('register.ejs')
})

app.get('/canvas', (req,res) => {
  console.log('CAnvas Test Route');
  res.render('canvastest.ejs')
})



// app.get('/builder', (req,res) => {
//   console.log('builder route');
//   res.render('builder.ejs')
// })

app.use('/auth', authController)
app.use('/projects', projectController);
app.use('/builder', builderController);
app.use('/profile', userController);
app.use('/lessons', lessonController);








app.listen(PORT, () => {
  console.log('im listening');
})
