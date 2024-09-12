const express = require('express');
const commentController = require('../controllers/commentController');
const auth = require('../utils/auth');

const commentRouter = express.Router();

commentRouter.post('/:postId/comments', auth.checkAuth, commentController.createComment);
commentRouter.get('/:postId/comments', auth.checkAuth, commentController.getComments);
commentRouter.get('/:postId/comments/:commentId', auth.checkAuth, commentController.getCommentById);
commentRouter.put('/:postId/comments/:commentId', auth.checkAuth, commentController.updateComment);
commentRouter.delete('/:postId/comments/:commentId', auth.checkAuth, commentController.deleteComment);

module.exports = commentRouter;