const { Thought, User } = require('../models');

//get all thoughts
async function getThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  }
  catch (err) {
    res.status(500).json(err);
  }
};

//get a single thought
async function getSingleThought(req, res) {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId });
    if (thought) {
      res.json(thought);
    }
    else {
      res.status(404).json('No thought with that ID');
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
};

// create a new thought
async function createThought(req, res) {
  try { 
    const thought = await Thought.create(req.body);
    const user = await User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
    );
    if (user) {
      res.json('New thought created!');
    }
    else {
      res.status(404).json('Thought created, but found no user with that username');
    }
  } catch (err) {
      res.status(500).json(err);
    }
};

//delete thought
async function deleteThought(req, res) {
  try {
    const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
    const user = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
    );
    res.json('Thought successfully deleted!');
  }
  catch {
    res.status(404).json('No thought with this id!');
  }
};

// update a thought
async function updateThought(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    );
    if (thought) {
      res.json('Updated thought!');
    }
    else {
      res.status(404).json('Thought not found');
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getThoughts, 
  getSingleThought, 
  createThought,
  deleteThought,
  updateThought
};
