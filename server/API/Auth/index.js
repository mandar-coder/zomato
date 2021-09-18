//Library
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Models
import{ UserModel } from '../../database/user/index';

const Router = express.Router();

/*
Route           /auth/signup
Desc            Register new user
Params          none
Access          Public
Method          POST
*/
Router.post("/signup", async (req,res) => {
    try{ 
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "success" });
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /auth/signin
Desc            sign with email and password
Params          none
Access          Public
Method          POST
*/
Router.post('/signin', async (req,res) => {
    try{
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        const token = user.generateJwtToken();
        return res.status(200).json({token, status: "success" });
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
});

export default Router;