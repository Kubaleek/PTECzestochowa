export interface Course {
    title: string;
    description: string;
    date: string;
    name: string;
    course_link: string;
  }
  
  export interface CourseListProps {
    courses: CourseList;
  }
  
  export interface CourseList {
    [courseId: string]: Course;
  }
  
  // Przykładowa lista kursów
  export const courses: CourseList = {
    course1: {
      title: "Szkolenie #1",
      name:"Testowy test",
      description: "Opis Lorem ipsum jakis tam",
      date: "2020-01-01",
      course_link: "https://www.google.com"
    },
    course2: {
      title: "Szkolenie #2",
      name:"Testowy test",

      description: "Opis kolejnego szkolenia, bardziej szczegółowy opis.",
      date: "2021-03-15",
      course_link: "https://www.example.com"
    },
    course3: {
      title: "Szkolenie #3",
      name:"Testowy test",
      description: "Opis trzeciego szkolenia, zawierający różne informacje.",
      date: "2022-07-20",
      course_link: "https://www.anotherexample.com"
    },
    course4: {
      title: "Szkolenie #4",
      name:"Testowy test",
      description: "Opis czwartego szkolenia, dodatkowe detale i informacje.",
      date: "2023-05-10",
      course_link: "https://www.yetanotherexample.com"
    },
    course5: {
      title: "Szkolenie #5",
      name:"Testowy test",
      description: "Opis piątego szkolenia, krótki opis.",
      date: "2024-01-05",
      course_link: "https://www.finalexample.com"
    }
  };
  