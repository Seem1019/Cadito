import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const cart = new Schema({
  user_id: {
    type: Schema.Types.ObjectId, required: true, unique: true, ref: 'User',
  },
  items: [{
    _id: { type: Schema.Types.ObjectId, required: true },
    product_id: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
  }],
});

export default model('Cart', cart);