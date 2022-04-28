import Post from '../Models/Post.js';

export const createPost = async (req, res) => {
  const {
    owner_id,
    img_url,
    display_name,
    description,
    price,
  } = req.body;

  try {
    const post = await Post.create({
      owner_id,
      img_url,
      display_name,
      description,
      price,
    });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const fetchPosts = async (req, res) => {
  const { post_id, user_id } = req.query;

  try {
    if (post_id) {
      const post = await Post.findById(post_id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
      return res.status(200).json(post);
    }
    if (user_id) {
      const userPosts = await Post.find({ owner_id: user_id });
      return res.status(200).json(userPosts);
    }
    return res.status(400).json({ message: 'Missing user_id or post_id' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const fetchRecentPosts = async (req, res) => {
  try {
    const recentPosts = await Post.find({}).sort({ created_date: -1 }).limit(10);
    return res.status(200).json(recentPosts);
  } catch (error) {
    return res.status(500).json({ error });
  }
};