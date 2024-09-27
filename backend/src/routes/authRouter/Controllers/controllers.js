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
const getUsers = async (req,res,next)=>{
    const users = await authService.getUsers();
    res.status(200).json({
        data: users
    });
}
const saveBlacklist = async (req,res,next) => {
    const {date,userId} = req.body;
    const data = await zauthService.saveBlacklist({
        date,
        userId
    });
    res.json({data:data})
}
const EditUser = async (req, res, next) => {
    const { email,username,role } = req.body;
    const user = await authService.editUser(email,username,role);
    if (username) {
        res.status(200).json({
            status: "success",
            data: { user },
            message: "User has been edited."
        });
    } else {
        res.status(404).json({
            status: "failed",
            message: "Username not found."
        });
    }
};
const createUser = async (req,res,next)=>{
    const user = await authService.createUser(req,res,next);
    const userC = JSON.stringify(user)
    res.status(200).json({
        userC
        
    });
}
const GetUserByRole = async (req, res, next) => {
    const { role } = req.params;
    const users = await authService.getUserByRole(role);
    res.status(200).json({
        status: "success",
        data: users,
        message: "Users fetched successfully."
    });
    res.status(200).json({
        status: "success",
        data: users,
        message: "Users fetched successfully."
    });
};
const GetUserByEmail = async (req, res, next) => {
    const { email } = req.body;
    const user = await authService.getUserEmail(email);
    res.status(200).json({
        status: "success",
        data: user,
        message: "Users fetched successfully."
    });
};
export const Controllers = {
    Register,
    Login,
    GetUserByEmail,
    Logout,
    DeleteUser,
    EditUser,
    GetUserByRole,
    saveBlacklist,
    getUsers,
    createUser
};