import Review from '../Models/Review.js';

export const createReview = async (req, res) => {
  const {
    user_id, product_id, rating, description,
  } = req.body;

  try {
    const review = await Review.create({
      user_id,
      product_id,
      rating,
      description,
    });
    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const fetchReviews = async (req, res) => {
  const { product_id, user_id } = req.query;

  try {
    if (product_id) {
      const productReviews = await Review.find({ product_id });
      return res.status(200).json(productReviews);
    }
    if (user_id) {
      const userReviews = await Review.find({ user_id });
      return res.status(200).json(userReviews);
    }
    return res.status(400).json({ message: 'Missing product_id or user_id' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};