const connection = require('../config/connection');
const { User, Thought } = require('../models');

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

  await User.insertMany(users);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});