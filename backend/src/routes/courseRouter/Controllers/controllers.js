import AppError from '../../../../utils/ErrorHandler.js';
import courseService from '../../../services.js/courseService.js';
const getAllCourses = async (req, res, next) => {
    try {
        const courses = await courseService.getAllCourses();
        res.json({ data: courses });
    } catch (error) {
        console.error("Error detected at fetching all courses", error);
        next(new AppError(error, 500));
    }
};

const deleteCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await courseService.DeleteCourse(id);
        if (result) {
            res.json({ message: "Course deleted successfully" });
        } else {
            next(new AppError("Course not found", 404));
        }
    } catch (error) {
        console.error("Error detected at deleting course", error);
        next(new AppError(error, 500));
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await courseService.getAllUsers();
        res.json({ data: users });
    } catch (error) {
        console.error("Error detected at fetching all users", error);
        next(new AppError(error, 500));
    }
};

const getCoursesWithUser = async (req, res, next) => {
    try {
        const courses = await courseService.getCoursesWithUser();
        res.json({ data: courses });
    } catch (error) {
        console.error("Error detected at fetching courses with users", error);
        next(new AppError(error, 500));
    }
};

const checkUserActivity = async (req, res, next) => {
    try {
        const { userID } = req.params;
        const { redirect, location } = await courseService.checkUserActivity(userID);
        if (redirect) {
            res.redirect(location);
        } else {
            res.json({ message: "User is still active" });
        }
    } catch (error) {
        console.error("Error detected at checking user activity", error);
        next(new AppError(error, 500));
    }
};

const getCourseName = async (req, res, next) => {
    try {
        const { courseId } = req.params;
        const courseName = await courseService.getCourseName(courseId);
        res.json({ data: courseName });
    } catch (error) {
        console.error("Error detected at fetching course name", error);
        next(new AppError(error, 500));
    }
};

const courseExists = async (req, res, next) => {
    try {
        const { courseName } = req.params;
        const exists = await courseService.courseExists(courseName);
        res.json({ exists });
    } catch (error) {
        console.error("Error detected at checking if course exists", error);
        next(new AppError(error, 500));
    }
};

const addCourse = async (req, res, next) => {
    try {
        const { name, date, description, link } = req.body;
        const result = await courseService.addCourse(name, date, description, link);
        res.json({ success: result });
    } catch (error) {
        console.error("Error detected at adding course", error);
        next(new AppError(error, 500));
    }
};

const editCourse = async (req, res, next) => {
    try {
        const course = req.body;
        const result = await courseService.getEditCourse(course);
        res.json({ success: result });
    } catch (error) {
        console.error("Error detected at editing course", error);
        next(new AppError(error, 500));
    }
};

const editUpdateCourse = async (req, res, next) => {
    try {
        const { userCourseCert, userCourseStatus, userCourseDateCompleted, userCourseId } = req.body;
        const result = await courseService.editUpdateCourse(userCourseCert, userCourseStatus, userCourseDateCompleted, userCourseId);
        res.json({ success: result });
    } catch (error) {
        console.error("Error detected at updating course", error);
        next(new AppError(error, 500));
    }
};

const deleteUsername = async (req, res, next) => {
    try {
        const { userCourseId } = req.params;
        const username = await courseService.deleteUsername(userCourseId);
        res.json({ data: username });
    } catch (error) {
        console.error("Error detected at deleting username", error);
        next(new AppError(error, 500));
    }
};

const deleteCourseName = async (req, res, next) => {
    try {
        const { userCourseId } = req.params;
        const courseName = await courseService.deleteCourseName(userCourseId);
        res.json({ data: courseName });
    } catch (error) {
        console.error("Error detected at deleting course name", error);
        next(new AppError(error, 500));
    }
};

const isCourseAssigned = async (req, res, next) => {
    try {
        const { userId, courseId } = req.params;
        const assigned = await courseService.isCourseAssigned(userId, courseId);
        res.json({ assigned });
    } catch (error) {
        console.error("Error detected at checking if course is assigned", error);
        next(new AppError(error, 500));
    }
};

const assignCourse = async (req, res, next) => {
    try {
        const { userId, courseId, certificate, status, dateCompleted } = req.body;
        const result = await courseService.assignCourse(userId, courseId, certificate, status, dateCompleted);
        res.json({ success: result });
    } catch (error) {
        console.error("Error detected at assigning course", error);
        next(new AppError(error, 500));
    }
};

const deleteUserCourse = async (req, res, next) => {
    try {
        const { userCourseId } = req.params;
        const result = await courseService.deleteUserCourse(userCourseId);
        res.json({ success: result });
    } catch (error) {
        console.error("Error detected at deleting user course", error);
        next(new AppError(error, 500));
    }
};

export const Controllers = {
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
    deleteUserCourse,
};