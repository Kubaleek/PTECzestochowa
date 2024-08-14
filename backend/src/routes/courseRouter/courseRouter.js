import express from 'express'
import { Controllers } from './Controllers/controllers.js';
import data from '../../../utils/constants.js'

const { 
    getAllCourses, 
    deleteCourse, 
    getAllUsers, 
    getCoursesWithUser,
    checkUserActivity,
    getCourseName,
    courseExists,
    addCourse,
    editCourse,
    editUpdateCourse,
    deleteUsername,
    deleteCourseName,
    isCourseAssigned,
    assignCourse,
    deleteUserCourse
} = Controllers;
const courseRouter = express.Router();

courseRouter.get(`${data.courses}/all`, getAllCourses);
courseRouter.delete(`${data.courses}/delete/:id`, deleteCourse);
courseRouter.get(`${data.courses}/all`, getAllUsers);
courseRouter.get(`${data.courses}/with-users`, getCoursesWithUser);
courseRouter.get(`${data.users}/check-activity/:userID`, checkUserActivity);
courseRouter.get(`${data.courses}/name/:courseId`, getCourseName);
courseRouter.get(`${data.courses}/exists/:courseName`, courseExists);
courseRouter.post(`${data.courses}/add`, addCourse);
courseRouter.put(`${data.courses}/edit`, editCourse);
courseRouter.put(`${data.courses}/update`, editUpdateCourse);
courseRouter.delete(`${data.courses}/username/:userCourseId`, deleteUsername);
courseRouter.delete(`${data.courses}/coursename/:userCourseId`, deleteCourseName);
courseRouter.get(`${data.courses}/assigned/:userId/:courseId`, isCourseAssigned);
courseRouter.post(`${data.courses}/assign`, assignCourse);
courseRouter.delete(`${data.courses}/delete/:userCourseId`, deleteUserCourse);

export default courseRouter;