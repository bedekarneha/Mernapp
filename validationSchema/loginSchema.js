import { check } from "express-validator";
 export const LoginSchema = [
    check("username", "Username is required")
    .exists()
    .isAlphanumeric()
    .withMessage("Username should be alphanumeric")
    .trim()
    .isLength({ min: 2, max: 100 }),

  check("password", "Password is required")
    .exists()
    .isLength({ min: 2, max: 32 })
    .trim(),
 ];