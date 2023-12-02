//Create web server
const express = require('express');
const router = express.Router();
const CommentModel = require('../models/comment');
const PostModel = require('../models/posts');
const checkLogin = require('../middlewares/check').checkLogin;

// POST /comments 
router.post('/', checkLogin, function(req, res, next) {
    const author = req.session.user._id;
    const postId = req.fields.postId;
    const content = req.fields.content;

    // 校验参数
    try {
        if (!content.length) {
            throw new Error('Error');
        }
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('back');
    }
}); 
