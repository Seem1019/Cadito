import mongoose from 'mongoose';
import Cart from '../Models/Cart.js';
import History from '../Models/History.js';

export const fetchCart = async (req, res) => {
  const { user_id } = req.query;
  try {
    const cart = await Cart.findOne({ user_id }) ?? await Cart.create({ user_id });
    return res.status(200).json(cart.items);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const addToCart = async (req, res) => {
  const { product_id, user_id } = req.body;

  const newItem = {
    _id: new mongoose.Types.ObjectId(),
    product_id,
  };

  try {
    const cart = await Cart.findOneAndUpdate(
      { user_id },
      { $push: { items: newItem } },
      { new: true, upsert: true },
    );
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const removeFromCart = async (req, res) => {
  const { item_id } = req.query;

  try {
    const cart = await Cart.findOneAndUpdate(
      { 'items._id': item_id },
      { $pull: { items: { _id: item_id } } },
      { new: true },
    );
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const buyCart = async (req, res) => {
  const { user_id } = req.body;

  try {
    const cart = await Cart.findOne({ user_id });
    // Create a new history with the items from the cart
    await History.create({
      user_id,
      items: cart.items,
    });
    // Remove the items from the cart
    cart.items = [];
    // Save the cart
    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error });
  }
};