const { Schema, Types } = require('mongoose');

//create reactionSchema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { 
      type: String, 
      required: true, 
      minLength: 1,
      maxLength: 280 
    },
    username: {
      type: Schema.Types.String,
      ref: 'user',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
