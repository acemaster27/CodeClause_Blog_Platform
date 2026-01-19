const { blogCreate, blogGet, blogUpdate, blogDelete, blogGetById,} = require('../services/blog');

const BlogCreate = async (req, res) => {
    try{
        blogCreate(req);
        res.status(201).json({
            message: "Blog created successfully"
        });
    } catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

const BlogGet = async (req, res) => {
    try {
        blogGet(req);
        res.status(200).json({
            message: "Blog fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const BlogUpdate = async (req, res) => {
    try {
        blogUpdate(req);
        res.status(200).json({
            message: "Blog updated successfully"
            });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const BlogDelete = async (req, res) => {
    try {
        blogDelete(req);
        res.status(200).json({
            message: "Blog deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const BlogGetById = async (req, res) => {
    try {
        blogGetById(req);
        res.status(200).json({
            message: "Blog fetched successfully"
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
    BlogUpdate,
    BlogDelete,
    BlogGetById
}