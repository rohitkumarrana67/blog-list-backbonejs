
$(document).ready(function () {
    $('.add-blog').on('click', function () {
        var blog = new Blog({
            author: $('.author-input').val(),
            title: $('.title-input').val(),
            url: $('.url-input').val()
        });

        $('.author-input').val('');
        $('.title-input').val('');
        $('.url-input').val('');

        console.log(blog.toJSON());
        blogs.add(blog);

        blog.save(null, {
            success: function (response) {
                console.log("blog saved successfully with id= " + response.toJSON()._id);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
})