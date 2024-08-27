import { CoursesLogin } from "./CourseLogin/CourseLogin";
import Panel from "./CourseList/Panel";
import { panels } from "./CourseList/ts/paneldata";

export default function Courses() {
    return (
        <>
            <CoursesLogin />
            <Panel panels={panels}/>
        </>
    );
}