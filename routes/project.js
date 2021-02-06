const router = require('express').Router();
const Project = require('../model/Project');
const fetch = require('node-fetch');

router.get('/all', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/githubjobs', async (req, res) => {
  var jobs = await fetch('https://jobs.github.com/positions.json')
    .then((res) => {
      return res.json();
    })
    .catch((res) => {
      console.log('Exception : ', res);
    });
  res.json(jobs);
});

router.put('/like', async (req, res) => {
  Project.findByIdAndUpdate(
    req.body.projectId,
    {
      $push: { likes: req.body.ip },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json(err);
    } else {
      res.json(result);
    }
  });
});

router.put('/unlike', async (req, res) => {
  Project.findByIdAndUpdate(
    req.body.projectId,
    {
      $pull: { likes: req.body.ip },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
