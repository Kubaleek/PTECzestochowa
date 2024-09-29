import express from 'express'
import { Controllers } from './Controllers/controllers.js';
import data from '../../../utils/constants.js'
import { Verify } from '../../../utils/middlewares.js';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'public/assets/Courses')); // Set destination for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use original file name
    },
  });
  
  const upload = multer({ storage }); // Initialize multer with the storage settings
const { 
    getAllCourses, 
    deleteCourse, 
    getAllUsers, 
    getCoursesWithUser,
    checkUserActivity,
    getCourseName,
    courseExists,
    addCourse,
    getCourse,
    editCourse,
    getUsersAndCourses,
    editUpdateCourse,
    deleteUsername,
    deleteCourseName,
    getUsersFinal,
    getCompletedCourses,
    getCoursesByUser,
    deleteUserFromCourse,
    isCourseAssigned,
    getUsersFromCourse,
    assignCourse,
    deleteUserCourse
} = Controllers;
const courseRouter = express.Router();
courseRouter.get(`${data.courses}/all`, getAllCourses);
courseRouter.get(`${data.courses}/with-users`, getUsersFinal);
courseRouter.get(`${data.courses}/getAssignData`, getUsersAndCourses);
courseRouter.get(`${data.courses}/getCompleted/:userID`,getCompletedCourses);
courseRouter.delete(`${data.courses}/delete/:id`, deleteCourse);
//courseRouter.get(`${data.courses}/with-users`, getCoursesWithUser);
courseRouter.get(`${data.users}/check-activity/:userID`, checkUserActivity);
courseRouter.get(`${data.courses}/name/:courseId`, getCourseName);
courseRouter.get(`${data.courses}/:userID`, getCoursesByUser);
courseRouter.get(`${data.courses}/exists`, courseExists);


courseRouter.post(`${data.courses}/add`, upload.single('file'), addCourse);
courseRouter.put(`${data.courses}/edit`, editCourse); 
courseRouter.put(`${data.courses}/update`, editUpdateCourse);
courseRouter.delete(`${data.courses}/username/:userCourseId`, deleteUsername);
courseRouter.delete(`${data.courses}/coursename/:userCourseId`, deleteCourseName);
courseRouter.get(`${data.courses}/assigned/:userId/:courseId`, isCourseAssigned);
courseRouter.post(`${data.courses}/assign`, assignCourse);
courseRouter.delete(`${data.courses}/delete/:userCourseId`, deleteUserCourse);
courseRouter.delete(`${data.courses}/user-from-course/`, deleteUserFromCourse);

export default courseRouter;