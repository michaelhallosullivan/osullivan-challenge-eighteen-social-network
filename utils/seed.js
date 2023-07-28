const connection = require('../config/connection');
const { reactionSchema, User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [
    {
      username: 'witch',
      email: 'witch@badwitch.com'
    },
    {
      username: 'zombie',
      email: 'zombie@deadboys.com'
    },
    {
      username: 'werewolf',
      email: 'werewolf@fullmoon.com'
    },
    {
      username: 'vampire',
      email: 'vampire@bloodsuckers.com'
    },
    {
      username: 'ghost',
      email: 'ghost@invisiblebeauty.com'
    }
  ];

  const thoughts = [
    {
      thoughtText: 'Anyone have an extra broom?',
      username: 'witch'
    },
    {
      thoughtText: 'Really craving some blood right now...',
      username: 'vampire'
    },
    {
      thoughtText: 'Sometimes I feel like people are just staring through me',
      username: 'ghost'
    }
  ];

  const reactions = [
    {
      reactionBody: "How do you think I clean up all this hair?",
      username: "werewolf"
    },
    {
      reactionBody: "You can keep the blood, I'm more of a brain guy myself",
      username: "zombie"
    },
    {
      reactionBody: "I've been wearing the same shirt for years!",
      username: "zombie"
    },
    {
      reactionBody: "Try looking in a mirror!",
      username: "vampire"
    }
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.log(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});