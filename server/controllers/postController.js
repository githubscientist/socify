const Post = require('../models/post');
const Comment = require('../models/comment');

const postController = {
    createPost: async (req, res) => {
        try {
            const { description } = req.body;

            if (!description) {
                return res.status(400).json({ message: 'Description is required' });
            }

            const newPost = new Post({
                description,
                user: req.userId
            });

            await newPost.save();

            res.status(201).json({ message: 'Post created successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find().populate('user', '-password -__v -_id').populate('comments').sort({ createdAt: -1 });

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getPostById: async (req, res) => {
        try {
            const { id } = req.params;

            const post = await Post.findById(id).populate('user').populate('comments');

            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }

            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updatePost: async (req, res) => {
        try {
            const { id } = req.params;
            const { description } = req.body;
            const userId = req.userId;

            if (!description) {
                return res.status(400).json({ message: 'Description is required' });
            }

            const post = await Post.findById(id);

            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }

            if (post.user.toString() !== userId) {
                return res.status(403).json({ message: 'You are not authorized to update this post' });
            }

            post.description = description;
            post.updatedAt = new Date();

            await post.save();

            res.status(200).json({ message: 'Post updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deletePost: async (req, res) => {
        try {
            const { id } = req.params;
            const userId = req.userId;

            const post = await Post.findById(id);

            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }

            if (post.user.toString() !== userId) {
                return res.status(403).json({ message: 'You are not authorized to delete this post' });
            }

            await Post.findByIdAndDelete(id);

            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = postController;