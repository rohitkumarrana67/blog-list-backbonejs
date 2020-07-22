Backbone.Model.prototype.idAttribute = "_id";

//creating the Model
var Blog = Backbone.Model.extend({
    defaults: {
        author: "",
        title: "",
        url: ""
    }
});