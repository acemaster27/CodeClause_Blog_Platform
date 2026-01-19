const { createBlog, getBlog, deleteBlog, updateBlog, getAllBlogs} = require('../repository/blog');

const blogCreate = (req) => {
    try {
        const { title, content } = req.body;
        if( !title || !content ) {
            throw new Error("All fields are required");
        }
        createBlog(req);
    } catch (error) {
        throw new Error(error);
    }
};

const blogGet = (req) => {
    try {
        const { title } = req.body;
        if( !title ) {
            throw new Error("All fields are required");
        }
        getBlog(req);
    } catch (error) {
        throw new Error(error);
    }
};

const blogDelete = (req) => {
    try {
        const { title } = req.body.title;
        if( !title ) {
            throw new Error("All fields are required");
        }
        deleteBlog(req);
    } catch (error) {
        throw new Error(error);
    }
};

const blogUpdate = (req) => {
    try {
        const { title, content } = req.body;
        if( !title || !content ) {
            throw new Error("All fields are required");
        }
        updateBlog(req);
    } catch (error) {
        throw new Error(error);
    }
};

const blogGetAll = (req) => {
    try {
        getAllBlogs(req);
    } catch (error) {
        throw new Error(error);
    }    
};


module.exports = {
    blogCreate,
    blogGet,
    blogDelete,
    blogUpdate,
    blogGetAll
};