const express = require('express');
const router = express.Router();
const userModel = require('../Models/User');

//Login
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await userModel.findOne({username, password});
    if(user){
        res.json(user);
    }else{
        res.status(404).json({msg: 'User not found'});
    }
});

//Register
router.post('/register', async (req, res) => {
    const {display_name, username, password} = req.body;
    const user = new userModel({username, password, display_name});
    await user.save();
    res.json({status: 'User saved'});
});

//fetch user
router.post("/prev-login",async (req,res)=>{
    const {_id} = req.body;
    const user = await userModel.findById(_id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({msg: 'User not found'});
    }
});

//Get all users
router.get("/", async (req, res) => {
    const users = await userModel.find();
    res.json(users);
});

//get user by id
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({msg: 'User not found'});
    }
});

module.exports = router;
