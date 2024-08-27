import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { Course } from "./ts/courseData";

interface CourseListComponentProps {
  course: Course;
}

export const CourseListComponent: React.FC<CourseListComponentProps> = ({ course }) => {
  return (
    <div className="space-y-6 my-2 bg-gray-100 shadow-lg rounded-lg">
      <Accordion className="bg-green-900 rounded-lg overflow-hidden">
        <AccordionSummary
          expandIcon={<ChevronRightIcon className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="bg-green-700 text-white flex justify-between items-center p-4"
        >
          {/* Nazwa Szkolenia po lewej stronie */}
          <div className="flex flex-col mx-4">
            <div className="flex flex-row items-center">
              <Typography className="text-gray-300 text-base">Nazwa Szkolenia</Typography>
            </div>
            <div className="flex flex-row items-center space-x-2 border-2 p-1 rounded-lg bg-green-800">
              <PersonIcon className="text-gray-300" />
              <Typography className="text-white font-semibold whitespace-nowrap">{course.title}</Typography>
            </div>
          </div>

          {/* Opis Szkolenia po prawej stronie */}
          <div className="flex flex-col mx-4">
            <div className="flex-row items-center">
              <Typography className="text-gray-300 text-base">Opis szkolenia</Typography>
            </div>
            <div className="flex-1 border-2 p-1 rounded-lg bg-green-800">
              <Typography className="text-white font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                {course.description}
              </Typography>
            </div>
          </div>

          {/* Imię i Nazwisko Użytkownika pośrodku */}
          <div className="flex flex-col mx-4">
            <div className="flex-row items-center">
              <Typography className="text-gray-300 text-base">Nazwa użytkownika</Typography>
            </div>
            <div className="flex items-center space-x-2 border-2 p-1 rounded-lg bg-green-800">
              <Typography className="text-white font-semibold">{course.name}</Typography>
            </div>
          </div>
        </AccordionSummary>

        <AccordionDetails className="bg-green-200 p-4">
          <Typography className="text-gray-800">
            <a href={course.course_link} className="text-blue-600 underline">
              Link do kursu
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CourseListComponent;