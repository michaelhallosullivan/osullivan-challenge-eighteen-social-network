const User = require('../models/User');

// Add a friend
async function addFriend(req, res) {
  try {
    const friend = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    res.json('Friend added!');
  }
  catch(err) {
    res.status(500).json(err);
  }
};

// Remove a friend
async function removeFriend(req, res) {
  try {
    const friend = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    res.json('Friend deleted!');
  }
  catch(err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addFriend, 
  removeFriend
};