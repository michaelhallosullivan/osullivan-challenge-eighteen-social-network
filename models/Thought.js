const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: { 
      type: String, 
      required: true, 
      minLength: 1,
      maxLength: 280 
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: Schema.Types.String,
      ref: 'user',
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;