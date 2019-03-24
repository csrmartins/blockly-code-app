const express = require('express');
const router  = express.Router();
const methodOverride = require('method-override');
const fetch = require('node-fetch');
const session = require('express-session');


router.get('/login', (req, res) => {
  console.log('/auth/login GET');
});

router.post('/login', async (req, res) => {
  console.log(req.body, 'this is req.body');


  try{
    fetch('https://ancient-woodland-36793.herokuapp.com/api/v1/auth/login', {
          method: 'POST',
          body:    JSON.stringify(req.body),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
      })

      .then(res => res.json())
      .then(json => {(
        req.session.user = json._id,
        req.session.email = json.email,
        req.session.logged = true,
        console.log(req.session, 'this is User Session'),
        res.redirect(`/projects/${req.session.user}`)
      )});

  }catch(err){
    res.send(err)
  }

});


router.post('/register', async (req, res) => {

  try{
    fetch('https://ancient-woodland-36793.herokuapp.com/api/v1/auth', {
          method: 'POST',
          body:    JSON.stringify(req.body),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
      })

      .then(res => res.json())
      .then(json => {(
        req.session.user = json._id,
        req.session.email = json.email,
        req.session.logged = true,
        console.log(req.session.user, 'this is User Session'),
        res.redirect('/builder')
      )});

  }catch(err){
    res.send(err)
  }

});

router.get('/logout', async (req, res) => {
  console.log('Auth Logout Route on Client');
  try{
    fetch(`https://ancient-woodland-36793.herokuapp.com/v1/auth/logout`)
    .then(res => res.json())
    .then(json => {(
      logoutMessage = json.message,
      req.session.message = logoutMessage,
      req.session.logged = false,
      console.log(req.session.message, 'this is logout message'),
      res.redirect('/')
    )})
  }catch(err){
    res.send(err)
  }

})



module.exports = router
