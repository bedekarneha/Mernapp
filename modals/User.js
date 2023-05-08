import mongoose from "mongoose";


 export const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 32,
        required:true,
      },
      username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
        unique: true,
      },
      password: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
      },
      email: {
        type: String,
        minlength: 2,
        maxlength:100,
        required: true,
        unique: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    });
export default  mongoose.model("User", userSchema);
