const Comment = require('../models/comment');
const Post = require('../models/post');

const commentController = {
    // create a comment
    createComment: async (req, res) => {
        // get the user ID from the request object
        const { userId } = req;

        // get the post ID from the request parameters
        const { postId } = req.params;

        // get the comment from the request body
        const { comment } = req.body;

        // check if the comment is not provided
        if (!comment) {
            return res.status(400).json({ message: 'Comment is required' });
        }

        // check if the post ID is not provided
        if (!postId) {
            return res.status(400).json({ message: 'Post ID is required' });
        }

        // check if the user ID is not provided
        if (!userId) {
            return res.status(400).json({ message: 'You should be logged in to post a comment' });
        }

        // create a new comment object
        const newComment = new Comment({
            comment,
            user: userId,
            post: postId
        });

        // save the new comment object
        const savedComment = await newComment.save();

        // push the comment ID to the post's comments array
        // get the post object by ID
        const post = await Post.findById(postId);

        // check if the post is not found
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // push the comment ID to the post's comments array
        post.comments.push(savedComment._id);

        // save the post object
        await post.save();

        // send a response
        res.status(201).json({ message: 'Comment created successfully' });
    },
    // get all comments
    getComments: async (req, res) => {
        // get the post ID from the request parameters
        const { postId } = req.params;

        // check if the post ID is not provided
        if (!postId) {
            return res.status(400).json({ message: 'Post ID is required' });
        }

        // get all comments by post ID
        const comments = await Comment.find({ post: postId }).populate('user', 'name');

        // send a response
        res.status(200).json(comments);
    },
    // get a comment by ID
    getCommentById: async (req, res) => {
        // get the comment Id from the request parameters
        const { commentId } = req.params;

        // check if the comment ID is not provided
        if (!commentId) {
            return res.status(400).json({ message: 'Comment ID is required' });
        }

        // get the comment by ID
        const comment = await Comment.findById(commentId).populate('user', 'name');

        // check if the comment is not found
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // send a response
        res.status(200).json(comment);
    },
    // update a comment by ID
    updateComment: async (req, res) => {
        // update a comment by ID only if the user is the owner of the comment
        // get the user ID from the request object
        const { userId } = req;

        // get the comment ID from the request parameters
        const { commentId } = req.params;

        // get the comment from the request body
        const { comment } = req.body;

        // check if the comment ID is not provided
        if (!commentId) {
            return res.status(400).json({ message: 'Comment ID is required' });
        }

        // check if the comment is not provided
        if (!comment) {
            return res.status(400).json({ message: 'Comment is required' });
        }

        // get the comment by ID
        const foundComment = await Comment.findById(commentId);

        // check if the comment is not found
        if (!foundComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // check if the user is not the owner of the comment
        if (foundComment.user.toString() !== userId) {
            return res.status(403).json({ message: 'You are not allowed to update this comment' });
        }

        // update the comment
        await Comment.findByIdAndUpdate(commentId, { comment });

        // send a response
        res.status(200).json({ message: 'Comment updated successfully' });
    },
    // delete a comment by ID
    deleteComment: async (req, res) => {
        // get the user ID from the request object
        const { userId } = req;

        // get the comment ID from the request parameters
        const { commentId } = req.params;

        // check if the comment ID is not provided
        if (!commentId) {
            return res.status(400).json({ message: 'Comment ID is required' });
        }

        // get the postId from the request params
        const { postId } = req.params;

        // get the comment by ID
        const foundComment = await Comment.findById(commentId);

        // check if the comment is not found
        if (!foundComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // check if the user is not the owner of the comment    
        if (foundComment.user.toString() !== userId) {
            return res.status(403).json({ message: 'You are not allowed to delete this comment' });
        }

        // delete the comment
        await Comment.findByIdAndDelete(commentId);

        // get the post object by ID
        const post = await Post.findById(postId);

        // check if the post is not found
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // remove the comment ID from the post's comments array
        post.comments = post.comments.filter((comment) => comment.toString() !== commentId);

        // save the post object
        await post.save();

        // send a response
        res.status(200).json({ message: 'Comment deleted successfully' });
    }
}

module.exports = commentController;