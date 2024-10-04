import express from "express";
import { Controllers } from "./Controllers/controllers.js";
import data from "../../../utils/constants.js";
import { check, validationResult } from "express-validator";
import { Validate, Verify, VerifyRole } from "../../../utils/middlewares.js";
const {
  Register,
  Login,
  Logout,
  GetUserByEmail,
  getUsers,
  createUser,
  DeleteUser,
  saveBlacklist,
  EditUser,
  GetUserByRole,
} = Controllers;

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
authRouter.post("/create-user",createUser)
// authRouter.get(`/user`, Verify, (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "Welcome user!",
//     user: req.user,
//   });
// });
authRouter.post("/create-session", saveBlacklist);
authRouter.get(`/admin/user`, Verify, VerifyRole, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the your Dashboard!",
  });
});

authRouter.get("/logout", Logout);
authRouter.get("/user", GetUserByEmail);
authRouter.get("/users", getUsers);

authRouter.delete("/user/delete", DeleteUser); // Assuming role-based access control
authRouter.put("/user/edit", EditUser);
authRouter.get("/users/role/:role", GetUserByRole);

export default authRouter;
