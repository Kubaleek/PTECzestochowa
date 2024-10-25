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
courseRouter.get(`/all`, getAllCourses);
courseRouter.get(`/with-users`, getUsersFinal);
courseRouter.get(`/getAssignData`, getUsersAndCourses);
courseRouter.get(`/getCompleted/:userID`,getCompletedCourses);
courseRouter.delete(`/delete/:id`, deleteCourse);
//courseRouter.get(`/with-users`, getCoursesWithUser);
courseRouter.get(`${data.users}/check-activity/:userID`, checkUserActivity);
courseRouter.get(`/name/:courseId`, getCourseName);
courseRouter.get(`/:userID`, getCoursesByUser);
courseRouter.get(`/exists`, courseExists);


courseRouter.post(`/add`, upload.single('file'), addCourse);
courseRouter.put(`/edit`, editCourse); 
courseRouter.put(`/update`, editUpdateCourse);
courseRouter.delete(`/username/:userCourseId`, deleteUsername);
courseRouter.delete(`/coursename/:userCourseId`, deleteCourseName);
courseRouter.get(`/assigned/:userId/:courseId`, isCourseAssigned);
courseRouter.post(`/assign`, assignCourse);
courseRouter.delete(`/delete/:userCourseId`, deleteUserCourse);
courseRouter.delete(`/user-from-course/`, deleteUserFromCourse);

export default courseRouter;
