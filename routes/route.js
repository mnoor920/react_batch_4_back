import express from "express";
import { contryName, postData, userData } from "../dummpyApi.js";
import { SignUp, GetUsers, Login } from "../controller/user-controller.js";
import { BlogCategory, getBlogCategory } from "../controller/blog-cat-controller.js";
import { Blog, getBlogs } from "../controller/blog-controller.js";
import upload from "../middelware/uploadImages.js";



const router = express.Router();

router.post('/sign_up', upload.single('user_photo'), SignUp)
router.get('/get_users', GetUsers)
router.post('/login', Login)



router.post('/add_category', BlogCategory)
router.get('/get_categories', getBlogCategory)


router.post('/create_blog', Blog)
router.get('/get_blogs', getBlogs)



router.get('/users', (req, res) => {
    res.send(userData)
})


export default router