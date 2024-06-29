import express from "express";
import { contryName, postData, userData } from "../dummpyApi.js";



const router = express.Router();

router.get('/', (req, res) => { res.send(contryName) })


router.get('/posts', (req, res) => {
    res.send(postData)
})
router.get('/users', (req, res) => {
    res.send(userData)
})


export default router