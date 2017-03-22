"use strict";
var BlogPost = (function () {
    function BlogPost(item) {
        var id = item.id, lastChange = item.lastChange, title = item.title, author = item.author, authorEmail = item.authorEmail, body = item.body;
        this.id = id;
        this.lastChange = lastChange;
        this.title = title;
        this.author = author;
        this.authorEmail = authorEmail;
        this.body = body;
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
//# sourceMappingURL=blog-post.js.map