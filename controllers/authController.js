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
    fetch('http://localhost:9000/api/v1/auth/login', {
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
        res.redirect(`/projects/all`)
      )});

  }catch(err){
    res.send(err)
  }

});


router.post('/register', async (req, res) => {

  try{
    fetch('http://localhost:9000/api/v1/auth', {
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



module.exports = router
