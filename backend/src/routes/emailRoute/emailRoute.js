import express from 'express'
import { sendEmail } from './Controllers/controllers.js';
import data from '../../../utils/constants.js'
const emailRouter = express.Router();

emailRouter.post(`/send`, sendEmail)


export default emailRouter;