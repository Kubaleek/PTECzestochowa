import express from "express";
import { Controllers } from './Controllers/controllers.js'
import data from "../../../utils/constants.js";
import { check,validationResult } from "express-validator";
import { Validate, Verify, VerifyRole } from '../../../utils/middlewares.js'
const { Register, Login, Logout, DeleteUser, EditUsername, GetUserByRole } = Controllers;

const authRouter = express.Router();


authRouter.post(
  `/register`,
  check("email")
    .isEmail()
    .withMessage("Enter a valid email address")
    .normalizeEmail(),
  check("username")
    .not()
    .isEmpty()
    .withMessage("You username is required")
    .trim()
    .escape(),
  check("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Must be at least 8 chars long"),
  Validate,
  Register
);
// userRouter.get("/getToken/", (req, res) => {
//   res.json({test:crypto.randomBytes(20).toString('hex')})
// });

authRouter.post(
  `/login`,
  check("email")
    .isEmail()
    .withMessage("Enter a valid email address")
    .normalizeEmail(),
  check("password").not().isEmpty(),
  Validate,
  Login
);
authRouter.get(`/user`, Verify, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome user!",
    user: req.user,
  });
});

authRouter.get(`/admin/user`, Verify, VerifyRole, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the your Dashboard!",
  });
});

authRouter.get("/logout", Logout);

authRouter.get('/user/delete', VerifyRole, DeleteUser);  // Assuming role-based access control
authRouter.get('/user/edit/:userCourseId', Verify, EditUsername);
authRouter.get('/users/role/:role', Verify, VerifyRole, GetUserByRole);

export default authRouter;
