import mongoose from "mongoose";

const blogCatSchema = new mongoose.Schema(
    {
        cat_name: {
            type: String,
            required: true,
            unique: true
        },
        cat_des: {
            type: String,
            required: true,
        },
    }
)

const BlogCat = mongoose.model('blog_category', blogCatSchema)
export default BlogCat;