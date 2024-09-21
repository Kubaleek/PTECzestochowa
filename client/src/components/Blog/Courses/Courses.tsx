"use client"; // Ensure this component uses client-side rendering

import { CoursesLogin } from "./CourseLogin/CourseLogin";
import { useSession } from "next-auth/react"; // Import useSession
import Panel from "./CourseList/Panel";

export default function Courses() {
    const { data: session, status } = useSession(); // Use useSession to manage session state

    // You can handle loading state if needed
    if (status === "loading") {
        return <div>Loading...</div>; // Show a loading indicator while session is being fetched
    }

    return (
        <>
            {session && session.user ? <Panel /> : <CoursesLogin />}
        </>
    );
}
