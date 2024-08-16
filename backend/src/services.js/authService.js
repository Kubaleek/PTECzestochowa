import { pool } from '../database/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import AppError from '../../utils/ErrorHandler.js';
dotenv.config();

class UserService {


  generateAccessJWT(userId) {
    const payload = {
      id: userId,
    };
    return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {
      expiresIn: '20m',
    });
  }

  async getUsername(userId) {
    try {
      const [rows] = await pool.query(
        `SELECT username 
         FROM users 
         WHERE id = ?`, 
         [userId]
      );

      if (rows.length > 0) {
        return rows[0].username;
      }
      return null;
    } catch (error) {
      console.error("Error detected at fetching username");
      throw error;
    }
  }
  async usersExists(userEmail, userFullName) {
    try {
      const [rows] = await pool.query(
        `SELECT * 
         FROM users 
         WHERE email = ? OR username = ?`, 
         [userEmail, userFullName]
      );

      return rows.length > 0;
    } catch (error) {
      console.error("Error detected at checking if user exists");
      throw error;
    }
  }
  async save(user, next) {
    try {
      if (!user || !user.password) {
         next(new AppError('User object or password is undefined'));
      }

      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(user.password, salt);

      const [result] = await pool.query(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
        [user.email, user.username, user.password]
      );

      return result;  
    } catch (err) {
      next(err);  
    }
  }
  async saveU(user,next){
    try {
      if (!user || !user.password) {
         next(new AppError('User object or password is undefined'));
      }

      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(user.password, salt);

      const [result] = await pool.query(
        'INSERT INTO users (email, username, password,role) VALUES (?, ?, ?,?)',
        [user.email, user.username, user.password,user.role]
      );

      return result;  
    } catch (err) {
      next(err);  
    }
  }
  async CheckUser(id){
    try{
      const [rows] = await pool.query("SELECT `role` FROM `users` WHERE `id` = '?'",[id])
    }catch(error){
      console.error("Error detected at fetchnig CheckUser")
    }
  }
  async findOne(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length ? rows[0] : null;
  }
  async createUser(req,res,next){
    const { email, username, password,role } = req.body;

    try {
      const existingUser = await this.findOne(email);
      if (existingUser) {
        return res.status(400).json({
          status: "failed",
          data: [],
          message: "It seems you already have an account, please log in instead.",
        });
      }


      const newUser = { email, username,password,role};
      await this.save(newUser, next);

      res.status(200).json({
        status: "success",
        data: [{ email, username }],
        message: "Thank you for creating  accout with us.",
      });
    } catch (err) {
      next(err);
    }
  }
  async delete(user,next){
    try {
      if (!user || !user.password) {
         next(new AppError('User object or password is undefined'));
      }

      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(user.password, salt);

      const [result] = await pool.query(
        'DELETE FROM users WHERE id = ?',
        [user.id]
      );

      return result;  
    } catch (err) {
      next(err);  
    }
  }
  async deleteUser(req,res,next){
    const { email } = req.body;

    try {
      const existingUser = await this.findOne(email);
      if (!existingUser) {
        return res.status(400).json({
          status: "failed",
          data: [],
          message: "It seems account doesn't exists, try another email.",
        });
      }


      
      await this.delete(existingUser, next);

      res.status(200).json({
        status: "success",
        message: "Acount has been deleted.",
      });
    } catch (err) {
      next(err);
    }
  }
  async editUsername(userCourseId) {
    try {
      const [rows] = await pool.query(
        `SELECT users.username 
         FROM users 
         JOIN user_courses ON users.id = user_courses.user_id 
         WHERE user_courses.id = ?`, 
         [userCourseId]
      );

      if (rows.length > 0) {
        return rows[0].username;
      }
      return null;
    } catch (error) {
      console.error("Error detected at editing username");
      throw error;
    }
  }
  async getUserByRole(role='użytkownik'){
    try{
      const [rows] = await pool.query("SELECT `id`, `username`, `role` FROM `users` WHERE `role` = ?",[role])
      return rows;
    }catch(error){
      console.error("Error detected at fetchgnig getUserByRole")
      return error;
    }
  }
  
  async register(req, res, next) {
    const { email, username, password,role } = req.body;

    try {
      const existingUser = await this.findOne(email);
      if (existingUser) {
        return res.status(400).json({
          status: "failed",
          data: [],
          message: "It seems you already have an account, please log in instead.",
        });
      }


      const newUser = { email, username,password};
      await this.save(newUser, next);

      res.status(200).json({
        status: "success",
        data: [{ email, username }],
        message: "Thank you for registering with us. Your account has been successfully created.",
      });
    } catch (err) {
      next(err);
    }
  }

  async findByID(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
  }

  async login(req, res, next) {
    const { email, password } = req.body;
  
    try {
      const existingUser = await this.findOne(email);
      if (!existingUser) {
        return res.status(401).json({
          status: "failed",
          data: [],
          message: "Invalid email or password. Please try again with the correct credentials.",
        });
      }
  
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          status: "failed",
          data: [],
          message: "Invalid email or password. Please try again with the correct credentials.",
        });
      }
  
      // Zaktualizuj pole last_login
      await this.updateLastLogin(existingUser.id);
  
      const options = {
        maxAge: 20 * 60 * 1000, 
        httpOnly: true, 
        secure: true,
        sameSite: "None",
      };
      const token = this.generateAccessJWT(existingUser.id); 
      res.cookie("SessionID", token, options); 
      res.status(200).json({
        status: "success",
        message: "You have successfully logged in.",
      });
    } catch (err) {
      next(new AppError(err, 404));
    }
  }
  
  async updateLastLogin(userId) {
    try {
      await pool.query(
        'UPDATE users SET last_login = NOW() WHERE id = ?',
        [userId]
      );
    } catch (err) {
      console.error("Failed to update last_login:", err);
      throw new AppError("Failed to update last_login", 500);
    }
  }
  
  async FindOneBlackist(token){
    const [rows] = await pool.query('SELECT * FROM blacklist WHERE token = ?', [token]);
    return rows.length ? rows[0] : null;
  }

  async saveBlacklist(newBlacklist) {
    if (!newBlacklist) {
      return new AppError("Blacklist was not passed");
    }

    const [result] = await pool.query(
      'INSERT INTO blacklist (token, date) VALUES (?, ?)',
      [newBlacklist.token, newBlacklist.date]
    );
    return result;
  }
  async logout(req, res) {
    try {
        const authHeader = req.headers['cookie']; 
        if (!authHeader) return res.sendStatus(204);

        const cookieParts = authHeader.split(';').find(c => c.trim().startsWith('SessionID='));
        if (!cookieParts) return res.sendStatus(204);

        const accessToken = cookieParts.split('=')[1];
        if (!accessToken) return res.sendStatus(204);

        // TODO 
        // USUWANIE TOKENA JESLI ISTNIEJE

        const checkIfBlacklisted = await this.FindOneBlackist(accessToken);
        if (checkIfBlacklisted) return res.sendStatus(204);

        const newBlacklist = {
            token: accessToken,
            date: new Date()
        };
        await this.saveBlacklist(newBlacklist);

        res.clearCookie('SessionID', {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });

        res.status(200).json({ message: 'You are logged out!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
}
}

export default new UserService();