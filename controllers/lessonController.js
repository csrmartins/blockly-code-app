const express = require('express');
const router  = express.Router();
const methodOverride = require('method-override');
const fetch = require('node-fetch');
const session = require('express-session');


router.get('/demo/mobile/:id', (req, res) => {
  res.render(`lessons/mobile-demo-${req.params.id}.ejs`)
})

router.get('/:id', async (req, res) => {

  try{
    fetch(`https://ancient-woodland-36793.herokuapp.com/api/v1/users/${req.params.id}`)
    // fetch(`http://localhost:9000/api/v1/users/${req.params.id}`)

    .then(res => res.json())
    .then(json => {(
      foundUser = json.data,
      console.log(foundUser, 'this is found User'),
      res.render('path.ejs')
    )})
  }catch(err){
    res.send(err)
  }

});

router.get('/:id/unplugged', async (req, res) => {

  try{
    fetch(`https://ancient-woodland-36793.herokuapp.com/api/v1/users/${req.params.id}`)
    // fetch(`https://localhost:9000/api/v1/users/${req.params.id}`)

    .then(res => res.json())
    .then(json => {(
      foundUser = json.data,
      console.log(foundUser, 'this is found User'),
      res.render('unplugged.ejs')
    )})
  }catch(err){
    res.send(err)
  }

});

router.get('/:id/mission', async (req, res) => {

  try{
    fetch(`https://ancient-woodland-36793.herokuapp.com/api/v1/users/${req.params.id}`)
    // fetch(`https://localhost:9000/api/v1/users/${req.params.id}`)

    .then(res => res.json())
    .then(json => {(
      foundUser = json.data,
      console.log(foundUser, 'this is found User'),
      res.render('mission.ejs')
    )})
  }catch(err){
    res.send(err)
  }

});

router.get('/demo/:id', (req, res) => {
  res.render(`lessons/demo-${req.params.id}.ejs`)
})



module.exports = router
