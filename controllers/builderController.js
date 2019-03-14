const express = require('express');
const router  = express.Router();
const methodOverride = require('method-override');
const fetch = require('node-fetch');
const session = require('express-session');


router.get('/', async (req, res) => {
  console.log('/builderController GET');
  try {
    fetch(`http://localhost:9000/api/v1/projects/${req.params.id}`)
      .then(res => res.json())
      .then(json => {(
        foundProject = json.data,
        console.log(foundProject, 'this is foundProject'),
        res.render('builder/builder.ejs', {
              project: foundProject
        })
      )})

  }catch(err){
    res.send(err)
  }

});

router.get('/:id', (req, res) => {
  console.log(`/builderController/${req.params.id} GET`);

  try{
    fetch(`http://localhost:9000/api/v1/users/${author}`)
      .then(res => res.json())
      .then(json => {(
        userId = json.data._id,
        firstName = json.data.firstName,
        lastName = json.data.lastName,
        console.log(json.data.firstName, 'this is Author JSON')
      )});

  }catch(err){
    res.send(err)
  }

  try{
    fetch(`http://localhost:9000/api/v1/projects/${req.params.id}`)
      .then(res => res.json())
      .then(json => {(
        projectId = json.data._id,
        name = json.data.name,
        author = json.data.author,
        code = json.data.code,
        console.log(json.data.code, 'this is User JSON'),
        res.render('builder/index.ejs', {
              projectId: projectId,
              projectName: name,
              author: author,
              code: code,
              user: userId,
              firstName: firstName,
              lastName: lastName
        })
      )})

  }catch(err){
  res.send(err)
}

});

router.get('/edit/:id', async (req, res) => {
  console.log('edit route', req.params.id);

  try {
    fetch(`http://localhost:9000/api/v1/projects/${req.params.id}`)
      .then(res => res.json())
      .then(json => {(
        foundProject = json.data,
        console.log(foundProject, 'this is foundProject'),
        res.render('builder/builder.ejs', {
              project: foundProject
        })
      )})

  }catch(err){
    res.send(err)
  }
})





module.exports = router
