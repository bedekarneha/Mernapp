import express from "express";
import Register from "../controllers/Register.controller.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import { LoginSchema } from "../validationSchema/loginSchema.js";
import Login from "../controllers/Login.controller.js";
import { createTodo } from "../controllers/Todo.controller.js";
import { check } from "express-validator";
const apiRoute = express.Router();

export const apiProtected=express.Router();
apiRoute.post('/register', RegisterSchema, Register);
apiRoute.post('/login',LoginSchema, Login);


apiProtected.post('/createTodo',createTodo);
export default apiRoute;
