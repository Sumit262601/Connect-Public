const express = require('express');
const Blog = require('../models/Blog'); // Import the Blog model
const multer = require('multer'); // Import Multer
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Set the upload directory
const uploadDir = path.join(__dirname, '../uploads');

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdirSync(uploadDir, { recursive: true }); // Create upload directory if it doesn't exist
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Use a unique filename
    }
});

const upload = multer({ storage });

// ROUTE 1: Get all blogs using GET "api/blogs/fetchblogs"
router.get('/fetchblogs', async (req, res) => {
    try {
        const blogs = await Blog.find({}, 'title description images');
        res.json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2: Add a new blog using POST "api/blogs/create"
router.post('/create', upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const fileName = req.file ? req.file.filename : null;
    try {
        const blog = new Blog({
            title,
            description,
            images: fileName
        });
        const savedBlog = await blog.save();
        res.json(savedBlog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: Update an existing blog using PUT "api/blogs/update/:id"
router.put('/update/:id', upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const imageId = req.params.id;
    try {
        let blog = await Blog.findById(imageId);
        if (!blog) {
            return res.status(404).send("Blog not found");
        }

        // Remove the old image if a new one is uploaded
        if (req.file) {
            const oldImagePath = path.join(uploadDir, blog.images);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        }

        // Update the blog post
        const updatedBlog = {
            title: title || blog.title,
            description: description || blog.description,
            images: req.file ? req.file.filename : blog.images,
        };

        blog = await Blog.findByIdAndUpdate(imageId, { $set: updatedBlog }, { new: true });
        res.json(blog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 4: Delete a blog using DELETE "api/blogs/delete/:id"
router.delete('/delete/:id', async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).send("Blog not found");
        }

        // Remove the image file from the upload directory
        const imagePath = path.join(uploadDir, blog.images);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await Blog.findByIdAndDelete(req.params.id);
        res.json({ success: "Blog has been deleted!", blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
