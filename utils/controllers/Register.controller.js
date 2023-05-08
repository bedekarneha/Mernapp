import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode } from "../utils/constant.js";
import bcrypt from "bcrypt";
import User from "../modals/User.js";
import Jwt  from "jsonwebtoken";
const Register = async (req, res) => {
  const errors = validationResult(req);
if (errors.isEmpty()) {
    const { name, username, password, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
const userExists=await User.findOne({ $or: [{
  email:email},
  {username:username}
]});
if (userExists){
  return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"user exists"))
}
    try {
      const result = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        username: username,
      })


     const token=Jwt.sign({userId:result._id},JWT_TOKEN_SECRET);
      res.json(jsonGenerate(StatusCode.SUCCESS, "Registration successful", {userId:result._id,token:token}));
    } catch (error) {
      console.log(error);
    
    }
    
  }


    res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Validation error", errors.mapped()));
  
};

export default Register;
