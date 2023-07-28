const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};

/* refactored code
const { Post, User } = require('../models');

//get all posts
async function getPosts(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  }
  catch (err) {
    res.status(500).json(err);
  }
}
//get a single post
async function getSinglePost(req, res) {
  try {
    const post = await Post.findOne({ _id: req.params.postId });
    if (post) {
      res.json(post);
    }
    else {
      res.status(404).json({ message: 'No post with that ID' });
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
}

// create a new post
async function createPost(req, res) {
  try { 
    const post = await Post.create(req.body);
    const user = await User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { posts: post._id } },
          { new: true }
    );
    if (user) {
      res.json('Created the post 🎉');
    }
    else {
      res.status(404).json({ message: 'Post created, but found no user with that ID' })
    }
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
}

module.exports = {
  getPosts, 
  getSinglePost, 
  createPost
}

*/