import authService from './../src/services.js/authService.js'
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();
export const Validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let error = {};
        errors.array().map((err) => (error[err.param] = err.msg));
        return res.status(422).json({ error });
    }
    next();
};
    export const Verify = async (req, res, next) => {
        try {
            const authHeader = req.headers["authorization"]; // get the authorization header
            
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.sendStatus(401); // no token found
            }

            const accessToken = authHeader.split(' ')[1]; // extract token from "Bearer <token>"
            const checkIfBlacklisted = await authService.FindOneBlackist(accessToken); // Check if token is blacklisted
            if (checkIfBlacklisted) {
                return res.status(401).json({ message: "This session has expired. Please login again." });
            }

            // Verify the token
            jwt.verify(accessToken, process.env.SECRET_ACCESS_TOKEN, async (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: "This session has expired. Please login again." });
                }

                const { id } = decoded; // get user id from the decoded token
                const user = await service.findByID(id); // find user by that `id`
                if (!user) {
                    return res.status(401).json({ message: "User not found. Please login again." });
                }

                const { password, ...data } = user; // return user object without the password
                req.user = data; // put the data object into req.user
                next();
            });
        } catch (err) {
            res.status(500).json({
                status: "error",
                code: 500,
                data: [],
                message: "Internal Server Error",
            });
        }
    };
// middlewares/authorize.js

// Importy
// Middleware autoryzacyjny
export const authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    // Ensure token is present and valid
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
  
      // Verify the token against SECRET_ACCESS_TOKEN
      if (token === process.env.NEXT_PUBLIC_API_ACCESS_TOKEN) {
        next(); // Token is valid, proceed to the route handler
      } else {
        return res.status(403).json({ message: 'Invalid or expired token.' });
      }
    } else {
      return res.status(401).json({ message: 'Authorization token is required.' });
    }
  };
  
// można stworzyć osobne middleware dla każdej z roli albo przepuszczać przez next() odpowiednie komunikaty
export const VerifyRole = (req, res, next)=> {
    try {
        const user = req.user;
        const { role } = user;
        
        // tu sprawdzamy czy  ktoś jest adminem jeżeli tak przepuszczamy dalej
        /*
        nazewnictwo ról:
        admin: 0x88
        user: 0x01 
        */
        if (role !== "administrator" || role !== "Technik Strony") {
            return res.status(401).json({
                status: "failed",
                message: "You are not authorized to view this page.",
            });
        }
        next();
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
}