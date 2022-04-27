import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const review = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  product_id: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
},{versionKey: false});

export default model('Review', review)