import { pool } from "../database/database.js";

class CourseService {
  async getNavItems() {
    try {
      const [rows] = await pool.query("SELECT id, subtitle FROM `posts`");
      return rows;
    } catch (error) {
      console.error("Error detected ad fetching NavItems");
      throw error;
    }
  }
  async getAllCourses(){
    try {
      const [rows] = await pool.query("SELECT * FROM `courses`");
      return rows;
    } catch (error) {
      console.error("Error detected ad fetching NavItems");
      throw error;
    }
  }
  async DeleteCourse(id){
    try {
      const [rows] = await pool.query("DELETE FROM `courses` WHERE `id`=?",[id]);
      return rows;
    } catch (error) {
      console.error("Error detected ad fetching NavItems");
      throw error;
    }
  }
  async getAllUsers(){
    try {
      const [rows] = await pool.query("SELECT * FROM `users`");
      return rows;
    } catch (error) {
      console.error("Error detected ad fetching NavItems");
      throw error;
    }
  }
  async getUsersFromCourse(courseID){
    try{
      const [rows] = await pool.query("SELECT users.id, users.email, users.username FROM users JOIN user_courses ON users.id = user_courses.user_id  WHERE user_courses.course_id = ?",[courseID]);
      console.log(rows);
      return rows;
    }catch (error) {
      console.error("Error detected ad fetching getUsersFromCourse");
      throw error;
    }
  }
    async getCoursesWithUser(){
      try {
        const [rows] = await pool.query("SELECT user_courses.course_id, courses.name, courses.description, courses.date, courses.course_link, user_courses.certificate, user_courses.course_status, user_courses.date_completed FROM `user_courses` JOIN `users` ON users.id = user_courses.user_id JOIN `courses` ON courses.id = user_courses.id");
        return rows;
      } catch (error) {
        console.error("Error detected ad fetching NavItems");
        throw error;
      }
    }
  async getCourseByUser(userID){
    try{
      const [rows] = await pool.query("SELECT * FROM user_courses JOIN courses ON user_courses.course_id = courses.id WHERE user_courses.user_id = ?",[userID]);
      return rows;
    }catch(error){
      console.error("Error detected ad fetching NavItems");
      throw error;
    }
  }
  
  async getCorusesByStatus(userID,status='Ukończony'){
    try{
      const [rows] = await pool.query("SELECT * FROM user_courses JOIN courses ON user_courses.course_id = courses.id WHERE user_courses.user_id = ? AND user_courses.course_status = ?",[userID,status]);
      return rows;
    }catch(error){
      console.error("Error detected ad fetching NavItems");
      throw error;
    }
  }
  async EditCourse(course, courseId) {
    try {
      const [rows] = await pool.query(
        "UPDATE `courses` SET `name`=?, `description`=?, `date`=?, `course_link`=? WHERE `id`=?",
        [course.courseName, course.courseDescription, course.courseDate, course.courseFile ?? "testowy-link.pl", courseId] // Use courseId from the parameter
      );
      return rows;
    } catch (error) {
      console.error("Error detected while fetching EditCourse:", error);
      throw error; // Make sure the error is properly thrown for the API to handle
    }
  }
  
  
  async geteditCourse(userCourseId) {
    try {
      const [rows] = await pool.query(
        `SELECT courses.name 
         FROM courses 
         JOIN user_courses ON courses.id = user_courses.course_id 
         WHERE user_courses.id = ?`, 
         [userCourseId]
      );

      if (rows.length > 0) {
        return rows[0].name;
      }
      return null;
    } catch (error) {
      console.error("Error detected at editing course");
      throw error;
    }
  }

  async editUpdateCourse(userCourseCert, userCourseStatus, userCourseDateCompleted, userCourseId) {
    try {
      const query = `
        UPDATE user_courses 
        JOIN courses ON courses.id = user_courses.course_id 
        SET user_courses.certificate = ?, 
            user_courses.course_status = ?, 
            user_courses.date_completed = ? 
        WHERE user_courses.id = ?`;

      const [result] = await pool.query(query, [
        userCourseCert, 
        userCourseStatus, 
        userCourseDateCompleted, 
        userCourseId
      ]);

      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error detected at updating course");
      throw error;
    }
  }
  async deleteUsername(userCourseId) {
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
      console.error("Error detected at deleting username");
      throw error;
    }
  }

  async deleteCourseName(userCourseId) {
    try {
      const [rows] = await pool.query(
        `SELECT courses.name 
         FROM courses 
         JOIN user_courses ON courses.id = user_courses.course_id 
         WHERE user_courses.id = ?`, 
         [userCourseId]
      );

      if (rows.length > 0) {
        return rows[0].name;
      }
      return null;
    } catch (error) {
      console.error("Error detected at deleting course name");
      throw error;
    }
  }

  async isCourseAssigned(userId, courseId) {
    try {
      const [rows] = await pool.query(
        `SELECT * 
         FROM user_courses 
         WHERE user_id = ? AND course_id = ?`, 
         [userId, courseId]
      );

      return rows.length > 0;
    } catch (error) {
      console.error("Error detected at checking if course is assigned");
      throw error;
    }
  }

  async assignCourse(userId, courseId, certificate, status, dateCompleted) {
    try {
      const query = `
        INSERT INTO user_courses (user_id, course_id, certificate, course_status, date_completed) 
        VALUES (?, ?, ?, ?, ?)`;

      const [result] = await pool.query(query, [
        userId,
        courseId,
        certificate,
        status,
        dateCompleted,
      ]);

      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error detected at assigning course");
      throw error;
    }
  }

  async getCourses(){
    try{
      const [rows] = await pool.query("SELECT `id`, `name` FROM `courses`")
      return rows;
    }catch(error){
      console.error("Error detected at fetchgnig getUserByRole")
      return error;
    }
  }
  async deleteUserCourse(userCourseId) {
    try {
      const [result] = await pool.query(
        `DELETE FROM user_courses 
         WHERE id = ?`, 
         [userCourseId]
      );

      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error detected at deleting user course");
      throw error;
    }
  }
  async checkUserActivity(userID) {
    try {
      const [rows] = await pool.query("SELECT `last_login` FROM `users` WHERE `id` = ?", [userID]);

      if (rows.length > 0) {
        const lastLogin = new Date(rows[0].last_login).getTime();
        const currentTime = Date.now();
        const inactiveTime = 3600000; // 1 hour in milliseconds

        if ((currentTime - lastLogin) > inactiveTime) {
          await pool.query("UPDATE `users` SET `status` = 'inactive' WHERE `id` = ?", [userID]);


          return { redirect: true, location: process.env.CURRENT_URL }; 
        }
      }
      return { redirect: false };
    } catch (error) {
      console.error("Error detected at checking user activity");
      throw error;
    }
  }
  async getCourseName(courseId) {
    try {
      const [rows] = await pool.query(
        `SELECT name 
         FROM courses 
         WHERE id = ?`, 
         [courseId]
      );

      if (rows.length > 0) {
        return rows[0].name;
      }
      return null;
    } catch (error) {
      console.error("Error detected at fetching course name");
      throw error;
    }
  }
  async getCourse(courseId) {
    try {
      const [rows] = await pool.query(
        `SELECT * 
         FROM courses 
         WHERE id = ?`, 
         [courseId]
      );

      if (rows.length > 0) {
        return rows[0];
      }
      return null;
    } catch (error) {
      console.error("Error detected at fetching course name");
      throw error;
    }
  }
  async courseExists(courseName) {
    try {
      const [rows] = await pool.query(
        `SELECT * 
         FROM courses 
         WHERE name = ?`, 
         [courseName]
      );

      return rows.length > 0;
    } catch (error) {
      console.error("Error detected at checking if course exists");
      throw error;
    }
  }

  async addCourse(courseName, courseDate,endDate, courseDescription, courseLink) {
    try {
      const query = `
        INSERT INTO courses (name, description, date, course_link) 
        VALUES (?, ?, ?, ?)`;

      const [result] = await pool.query(query, [
        courseName,
        courseDescription,
        courseDate,
        courseLink,
      ]);

      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error detected at adding course");
      throw error;
    }
  }

}
export default new CourseService();
