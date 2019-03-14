const express = require('express');
const router  = express.Router();
const methodOverride = require('method-override');
const fetch = require('node-fetch');
const session = require('express-session');


// router.get('/', (req,res) => {
//   console.log('project route');
//   res.render('projects.ejs')
// })
//
// router.get('/:id', (req,res) => {
//   console.log(`projects/${req.params.id}`);
//   res.render('projects.ejs')
// })

router.post('/new', async (req, res) => {
  console.log(req.body, 'This is REQ.BODY of PROJECTS/NEW');
  try{
    fetch('http://localhost:9000/api/v1/projects/new', {
          method: 'POST',
          body:    JSON.stringify(req.body),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
      })

      .then(res => res.json())
      .then(json => {(
        console.log(json, 'this New Project JSON'),
        res.redirect('/projects/all')
      )});

  }catch(err){
    res.send(err)
  }

});

router.get('/all', async (req, res) => {

  try{
    fetch(`http://localhost:9000/api/v1/projects`)
      .then(res => res.json())
      .then(json => {(
        allProjects = json.data,
        console.log(allProjects, 'this is allProjects'),
        res.render('gallery.ejs', {
          projects: allProjects
        })
      )});

  }catch(err){
    res.send(err)
  }
});

router.delete('/:id', (req, res) =>{
  console.log('im in PROJECT DELETE ROUTE');
  try{
    fetch(`http://localhost:9000/api/v1/projects/${req.params.id}`, {
      method: 'DELETE',
      body:    JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(json => {(
      deletedProject = json.data,
      console.log(json.data, 'this is deletedProject JSON'),
      res.redirect(`/projects/all`)
      )});
  }catch(err){
  res.send(err)
  }


});



module.exports = router
