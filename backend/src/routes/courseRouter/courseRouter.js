import express from 'express'
import { Controllers } from './Controllers/controllers.js';
import data from '../../../utils/constants.js'
import { Verify } from '../../../utils/middlewares.js';
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
courseRouter.get(`${data.courses}/all`,Verify, getAllCourses);
courseRouter.delete(`${data.courses}/delete/:id`,Verify, deleteCourse);
courseRouter.get(`${data.courses}/all`,Verify, getAllUsers);
courseRouter.get(`${data.courses}/with-users`,Verify, getCoursesWithUser);
courseRouter.get(`${data.users}/check-activity/:userID`,Verify, checkUserActivity);
courseRouter.get(`${data.courses}/name/:courseId`,Verify, getCourseName);
courseRouter.get(`${data.courses}/exists`,Verify, courseExists);
courseRouter.post(`/add`, addCourse);
courseRouter.put(`${data.courses}/edit`,Verify, editCourse);
courseRouter.put(`${data.courses}/update`,Verify, editUpdateCourse);
courseRouter.delete(`${data.courses}/username/:userCourseId`,Verify, deleteUsername);
courseRouter.delete(`${data.courses}/coursename/:userCourseId`,Verify, deleteCourseName);
courseRouter.get(`${data.courses}/assigned/:userId/:courseId`,Verify, isCourseAssigned);
courseRouter.post(`${data.courses}/assign`,Verify, assignCourse);
courseRouter.delete(`${data.courses}/delete/:userCourseId`,Verify, deleteUserCourse);

export default courseRouter;