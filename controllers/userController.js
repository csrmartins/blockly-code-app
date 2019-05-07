const express = require('express');
const router  = express.Router();
const methodOverride = require('method-override');
const fetch = require('node-fetch');
const session = require('express-session');

router.get('/', (req, res) => {
  console.log('/userController GET');
  res.render('profile.ejs')
});


router.get('/:id', async (req, res) => {

  try{
    fetch(`https://ancient-woodland-36793.herokuapp.com/api/v1/users/${req.params.id}`)
    // fetch(`http://localhost:9000/api/v1/users/${req.params.id}`)

    .then(res => res.json())
    .then(json => {(
      foundUser = json.data,
      console.log(foundUser, 'this is found User')
    )})
  }catch(err){
    res.send(err)
  }

  try{
    fetch(`https://ancient-woodland-36793.herokuapp.com/api/v1/projects`)
    // fetch(`http://localhost:9000/api/v1/projects`)

      .then(res => res.json())
      .then(json => {(
        allProjects = json.data,
        console.log(allProjects, 'this is allProjects'),
        res.render('profile.ejs', {
          user: foundUser,
          projects: allProjects
        })
      )});

  }catch(err){
    res.send(err)
  }
});







module.exports = router
