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

export const Controllers = {
    Register,
    Login,
    Logout
}