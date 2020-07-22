var Blogs = Backbone.Collection.extend({
    model: Blog,
    url: "http://localhost:3000/api/blogs"
});

var blogs = new Blogs();