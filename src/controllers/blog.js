const { blogCreate, blogGet, blogGetAll} = require('../services/blog');

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

const BlogGetById = async (req, res) => {
    try {
        blogGetAll(req);
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
    BlogGetById
}