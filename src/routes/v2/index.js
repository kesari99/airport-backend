import express from "express";


const router = express.Router()


router.get("/info"  ,(req,res)=>{
    res.json({ message: "API v2 info route is working!" });
})


export default router