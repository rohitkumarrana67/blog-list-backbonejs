
var BlogView = Backbone.View.extend({
    model: Blog,
    tagName: "tr",
    initialize: function () {
        this.template = _.template($('.blogs-list-template').html());
    },
    events: {
        'click .edit-blog': 'edit',
        'click .update-blog': 'update',
        'click .cancel': 'cancel',
        'click .delete-blog': 'delete',
    },
    edit: function () {
        this.$('.edit-blog').hide();
        this.$('.delete-blog').hide();
        this.$('.update-blog').show();
        this.$('.cancel').show();

        var author = this.$('.author').html();
        var title = this.$('.title').html();
        var url = this.$('.url').html();

        this.$('.author').html('<input type="text" class="form-control author-update" value=" ' + author + ' " >');
        this.$('.title').html('<input type="text" class="form-control title-update" value=" ' + title + ' " >');
        this.$('.url').html('<input type="text" class="form-control url-update" value=" ' + url + ' " >');
    },
    update: function () {
        this.model.set({
            author: this.$('.author-update').val(),
            title: this.$('.title-update').val(),
            url: this.$('.url-update').val()
        });

        this.model.save(null, {
            success: function (response) {
                console.log("blog is updated with id= " + response.toJSON()._id);
            },
            error: function (err) {
                console.log(err);
            }
        })

        blogsView.render();

    },
    cancel: function () {
        blogsView.render();
    },
    delete: function () {
        this.model.destroy({
            success: function (response) {
                console.log("blog is successfully deleted with id= " + response.toJSON()._id);
            },
            error: function (err) {
                console.log(err);
            }
        });
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});



// creating view for blogs

var BlogsView = Backbone.View.extend({

    collection: blogs,
    el: '.blogs-list',
    initialize: function () {
        this.collection.on('add', this.render, this);
        this.collection.on('change', this.render, this);
        this.collection.on('remove', this.render, this);

        this.collection.fetch({
            success: function (response) {
                _.each(response.toJSON(), function (item) {
                    console.log("blog is found successfully with id= " + item._id);
                })
            },
            error: function (err) {
                console.log(err);
            }
        });
    },
    render: function () {
        var self = this;
        this.$el.html('');
        _.each(this.collection.toArray(), function (blog) {
            self.$el.append((new BlogView({ model: blog })).render().$el);
        });
        return this;
    }
});

var blogsView = new BlogsView();