const express = require('express');
const postController = require('../controllers/postController');
const auth = require('../utils/auth');

const postRouter = express.Router();

postRouter.post('/', auth.checkAuth, postController.createPost);
postRouter.get('/', auth.checkAuth, postController.getAllPosts);
postRouter.get('/:id', auth.checkAuth, postController.getPostById);
postRouter.put('/:id', auth.checkAuth, postController.updatePost);
postRouter.delete('/:id', auth.checkAuth, postController.deletePost);

module.exports = postRouter;