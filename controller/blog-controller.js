import Blogs from "../modal/blog-modal.js";

export const Blog = async (req, res) => {
    try {
        const blogs = await new Blogs(req.body);
        blogs.save();
        res.status(200).json({ msg: 'Blog  Created!' });
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getBlogs = async (req, res) => {
    let blogs;
    try {
        blogs = await Blogs.find({});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error);
    }
}