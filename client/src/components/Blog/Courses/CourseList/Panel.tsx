import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { PanelListProps } from "./ts/panelData";
import { courses } from "./ts/courseData";
import CourseListComponent from "./CorseList";

export const Panel: React.FC<PanelListProps> = ({ panels }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg md:text-xl font-bold">Szkolenia & Użytkownicy</h2>
      {Object.entries(panels).map(([panelId, panel]) => (
        <React.Fragment key={panelId}>
          <Accordion className="bg-green-900 rounded-lg overflow-hidden">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="bg-green-900 text-white flex justify-between items-center p-4"
            >
              {/* Tytuł po lewej stronie */}
              <Typography className="flex-1 text-left">
                {panel.title}
              </Typography>

              {/* Trzy obiekty tekstowe na środku */}
              <div className="flex-1 flex justify-center space-x-4">
                {panel.about.map((e, index) => (
                  <Typography
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <e.icon /> {e.title}
                  </Typography>
                ))}
              </div>

              {/* Ikonka edytowania po prawej stronie */}
              <div className="flex-1 flex justify-end">
                <EditIcon className="text-white cursor-pointer" />
              </div>
            </AccordionSummary>
            <AccordionDetails className="bg-green-200 p-4">
              {panel.title === "Szkolenia"
                ? Object.values(courses).map(course => (
                    <CourseListComponent key={course.name} course={course} />
                  ))
                : "Tutaj będą użytkownicy"}
            </AccordionDetails>
          </Accordion>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Panel;