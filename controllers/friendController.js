const User = require('../models');

// Add a friend
async function addFriend(req, res) {
  try {
    const friend = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { new: true }
    );
    res.json(friend);
    res.json({ message: 'Friend added!' })
  }
  catch(err) {
    res.status(500).json(err)
  }
}

// Remove a friend
async function removeFriend(req, res) {
  try {
    const friend = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.params.friendId } } },
      { new: true }
    );
    res.json(friend);
    res.json({ message: 'Friend deleted!' })
  }
  catch(err) {
    res.status(500).json(err)
  }
}

module.exports = {
  addFriend, 
  removeFriend
}