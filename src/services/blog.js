const { create } = require('../models/blog');
const { createBlog, getBlog, getAllBlogs} = require('../repository/blog');

const blogCreate = (req) => {
    try {
        const { title, body, coverImage, createdBy } = req.body;
        if( !title || !content || title.length < 4 || content.length < 4 ) {
            throw new Error("All fields are required. Content and title should be atleast 4 characters long");
        }
        const blogData = {
            title: title,
            body: body,
            coverImage: coverImage,
            createdBy: createdBy
        };
        return createBlog(blogData);
    } catch (error) {
        throw new Error(error);
    }
};

const blogGet = (req) => {
    try {
        const { title } = req.body;
        if( !title ) {
            throw new Error("Title is required to fetch blog");
        }
        return getBlog(req);
    } catch (error) {
        throw new Error(error);
    }
};

const blogGetAll = (req) => {
    try {
        return getAllBlogs(req);
    } catch (error) {
        throw new Error(error);
    }    
};


module.exports = {
    blogCreate,
    blogGet,
    blogGetAll
};