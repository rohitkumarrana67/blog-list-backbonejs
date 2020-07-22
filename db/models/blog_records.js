const mongoose = require("mongoose");

var BlogRecordSchema = mongoose.Schema({
    author: { type: String },
    title: { type: String },
    url: { type: String }
}, { timestamps: { createdAt: 'created_at', updatedAt: "updated_at" } });

module.exports = mongoose.model('blog_record', BlogRecordSchema);