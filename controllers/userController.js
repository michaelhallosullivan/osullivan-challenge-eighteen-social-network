const User = require('../models');

//get all users
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (err) {
    res.status(500).json(err);
  }
}
//get a single user
async function getSingleUser(req, res) {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (user) {
      res.json(user);
    }
    else {
      res.status(404).json({ message: 'No user with that ID' });
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

// create a new user
async function createUser(req, res) {
  try { 
    const user = await User.create(req.body);
    res.json(user);
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

// delete a user
async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndRemove({ _id: req.params.userId });
    res.json(user);
    res.json({ message: 'User removed!' });
  }
  catch (err) {
    res.status(500).json(err);
  }
}

// update a user
async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    );
    if (user) {
      res.json('Updated user!');
      res.json(user);
    }
    else {
      res.status(404).json({ message: 'User not found'})
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getUsers, 
  getSingleUser, 
  createUser,
  deleteUser,
  updateUser
}