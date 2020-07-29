const router = require('express').Router();
const Project = require('../model/Project');

router.get('/all', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(400).json(error);
  }
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
