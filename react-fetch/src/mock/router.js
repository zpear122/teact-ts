const express = require("express");
const router = express.Router();

router.get("/api/list",(req,res)=>{
    res.send([
        {
            name:"zhouzhou",
            age:20
        },
        {
            name:"azhen",
            age:19
        }
    ])
});

module.exports = router;