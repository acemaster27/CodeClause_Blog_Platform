const Blog = require("../src/models/blog");

const createBlog = async (req) => {
    try {
        const blog = await Blog.create(req);
        return blog;
    } catch (error) {
        throw new Error(error);
    }
};

const getBlog = async (req) => {
    try {
        return await Blog.findOne({ title: req.body.title }).populate;
    } catch (error) {
        throw new Error(error);
    }
};

const getAllBlogs = async (req) => {
    try {
        return await Blog.find({createdBy: req.user._id}).populate('createdBy', 'fullName');
    } catch (error) {
        throw new Error(error);
    }
};


module.exports = {
    createBlog,
    getBlog,
    getAllBlogs
};