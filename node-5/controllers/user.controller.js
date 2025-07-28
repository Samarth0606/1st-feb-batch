import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export async function register(req,res){
    try{
        let {email,fullName,password} = req.body;
        const data = await UserModel.findOne({email});
        if(data){
            return res.status(409).json({"Message":"User already exists"})
        }else{
            await UserModel.create({
                fullName,
                email,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json({"Message":"User created successfully"})
        }
    }
    catch(err){
        return res.status(500).json("SERVER ERROR" , err)
    }
}


export async function login(req,res){
    try{
        let {email,password} = req.body;
        let data = await UserModel.findOne({email});
        if(!data){
            return res.status(404).json({"Message":"User doesnot exists"})
        }
        let validPassword = bcrypt.compareSync(password, data.password);
        if(!validPassword){
            return res.status(403).json({"Message":"Wrong Credentials"})
        }

        // created JWT token
        const token = jwt.sign({id: data._id } , 'SECRETKEY' , {expiresIn: '1h'})
        return res.status(200).json({
            user:{
                fullName: data.fullName,
                email: data.email,
                password: data.password
            },
            accessToken: token,
            "Message": "Logged in successfully"
        })
    }
    catch(err){
        return res.status(500).json("SERVER ERROR" , err)
    }
}