const Blog = require("../src/models/blog");

const createBlog = async (req) => {
    try {
        const { title, content } = req.body;
        await Blog.create({
            title,
            content,
        });
    } catch (error) {
        throw new Error(error);
    }
};

const getBlog = async (req) => {
    try {
        await Blog.findOne({ title: req.body.title });
    } catch (error) {
        throw new Error(error);
    }
};

const deleteBlog = async (req) => {
    try {
        await Blog.findOneAndDelete({ title: req.body.title });
    } catch (error) {
        throw new Error(error);
    }
};

const updateBlog = async (req) => {
    try {
        const { title, content } = req.body;
        await Blog.findOneAndUpdate({ title }, { content });
    } catch (error) {
        throw new Error(error);
    }
};

const getAllBlogs = async (req) => {
    try {
        const blogs = await Blog.findById(req.user._id);
        return blogs;
    } catch (error) {
        throw new Error(error);
    }
};


module.exports = {
    createBlog,
    getBlog,
    deleteBlog,
    updateBlog,
    getAllBlogs
};