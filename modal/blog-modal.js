import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        cat_id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        author_name: {
            type: String,
            required: true,
        },
        blog_details: {
            type: String,
            required: true,
        }
    }
)

const Blogs = mongoose.model('blog', blogSchema)
export default Blogs;