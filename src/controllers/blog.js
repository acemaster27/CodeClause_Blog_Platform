const { blogCreate, blogGet, blogGetAll} = require('../services/blog');

const BlogCreate = async (req, res) => {
    try{
        const { title, body } = req.body;
        const createdBy = req.user._id;
        const coverImage = req.file ? `/uploads/${req.file.filename}` : null;
        req.body = {
            title,
            body,
            coverImage,
            createdBy
        };
        const blog = await blogCreate(req);
        res.status(201).json({
            message: "Blog created successfully",
            blog
        });
    } catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

const BlogGet = async (req, res) => {
    try {
        const blog = await blogGet(req);
        res.status(200).json({
            message: "Blog fetched successfully",
            blog
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const BlogGetAll = async (req, res) => {
    try {
        const blogs = await blogGetAll(req);
        res.status(200).json({
            message: "Blog fetched successfully",
            blogs
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    BlogCreate,
    BlogGet,
    BlogGetAll
}