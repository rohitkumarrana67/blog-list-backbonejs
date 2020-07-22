const express = require("express");
var Blog = require("../db/models/blog_records");

const router = express.Router();

router.get('/api/blogs', (req, res) => {
    Blog.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
});

router.post('/api/blogs', (req, res) => {
    var blog = new Blog(req.body);
    blog.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
});

router.delete('/api/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
});

router.put('/api/blogs/:id', (req, res) => {

    Blog.findByIdAndUpdate(req.params.id, req.body).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
});


module.exports = router;