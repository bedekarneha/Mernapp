import { check } from "express-validator";
 export const RegisterSchema = [
  check("name")
    .trim()
    .isAlpha()
    .withMessage("Name should be alphabets only"),

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

  check("email", "Email is required")
    .exists()
    .isEmail(),
    check("confirmPassword", "Passwords do not match")
    .exists()
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match")
  
];
export default RegisterSchema;

