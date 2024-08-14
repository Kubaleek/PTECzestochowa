import authService from "../../../services.js/authService.js";
const Register = async (req,res,next)=>{
    await authService.register(req,res,next);
}
const Login = async (req,res,next) =>{
    await authService.login(req,res,next);    
}
const Logout = async (req,res)=>{
    await authService.logout(req,res); 
}

const DeleteUser = async (req, res, next) => {
    await authService.deleteUser(req, res, next);
};

const EditUsername = async (req, res, next) => {
    const { userCourseId } = req.params;
    const username = await authService.editUsername(userCourseId);
    if (username) {
        res.status(200).json({
            status: "success",
            data: { username },
            message: "Username fetched successfully."
        });
    } else {
        res.status(404).json({
            status: "failed",
            message: "Username not found."
        });
    }
};

const GetUserByRole = async (req, res, next) => {
    const { role } = req.params;
    const users = await authService.getUserByRole(role);
    res.status(200).json({
        status: "success",
        data: users,
        message: "Users fetched successfully."
    });
};

export const Controllers = {
    Register,
    Login,
    Logout,
    DeleteUser,
    EditUsername,
    GetUserByRole
};