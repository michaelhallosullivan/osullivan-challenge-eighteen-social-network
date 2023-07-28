const { reactionSchema, Thought } = require('../models');

// Add a reaction
async function addReaction(req, res) {
  try {
    const reaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    );
    res.json('Reaction added!');
  }
  catch(err) {
    res.status(500).json(err);
  }
};

// Remove a reaction
async function removeReaction(req, res) {
  try {
    const reaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    res.json('Reaction deleted!');
  }
  catch(err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addReaction, 
  removeReaction
};
