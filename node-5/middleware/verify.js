import jwt from 'jsonwebtoken';
import UserModel from '../models/User.model.js';

// middleware to verify it
export function verifyToken(req,res,next){
    if(
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT"
    ){
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            'SECRETKEY',
            async function(err,verifyToken){
                if(err){
                    return res.status(403).json({"Message":"Invalid JSON token"})
                }
                let user = await UserModel.findById(verifyToken._id)
                req.user = user;
                next();
            }
        ) 
    }
    else{
        return res.status(404).json({"Message":"Token not found"})
    }
}

