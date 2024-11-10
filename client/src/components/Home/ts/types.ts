import { ReactElement, ReactNode } from "react";
import { StaticImageData } from 'next/image';

// Uniwersalny interfejs dla zawartości postów, artykułów i newsów
export interface BaseContent {
  id: number;
  subpost_id: number;
  title: string;
  subtitle: string;
  post_content: string;
  created_at:string;
  subpost_content: string;
  post_category: string;
}

// Interfejs dla artykułów
export interface Article extends BaseContent {
  [x: string]: ReactNode;
  image: string;
}

// Interfejs dla postów
export interface Posts extends BaseContent {
  [x: string]: any;
  post_id: number;
}

// Interfejs dla newsów
export interface News extends BaseContent {
  [x: string]: any;
  post_id: number;
}

// Generyczny interfejs dla odpowiedzi zawierających dane
export interface Response<T> {
  data: T[];
}

// Odpowiedzi dla artykułów, postów i newsów
export type ArticlesResponse = Response<Article>;
export type PostsResponse = Response<Posts>;
export type NewsResponse = Response<News>;

// Linki do mediów społecznościowych
export type SocialMediaLink = [string, string, ReactElement];

// Propsy ikon mediów społecznościowych
export type SocialIconsProps = {
  label: string;
  icon: ReactElement;
  className: string;
  href: string;
};

// Informacje o bohaterze strony (hero)
export type HeroInfosType = {
  id: number;
  href: string;
  src: string | StaticImageData;
  alt: string;
}

// Typ dla partnerów
export type PartnerType = {
  id: number;
  url: string;
  src: string | StaticImageData;
  name: string;
}

// Typ dla okręgów na mapie
export interface Circle {
  cx: number;
  cy: number;
}

// Propsy mapy
export interface MapProps {
  activeCircles: Circle[];
}

// Typy dla miast i ich danych
export interface CityTypes {
  name: string;
  email: string;
  tel: string;
  address: string;
  numberaccount: string;
  nip: string;
  krs: string;
  regon: string;
  url: string;
}

export interface City {
  [city: string]: CityTypes;
}

// --- NOWE TYPY ZWIĄZANE Z KURSAMI ---

// Interfejs dla pojedynczego kursu (tabela `courses`)
export interface Course {
  id: number;
  name: string;
  description: string;
  date: string; // Data kursu
  endDate:string;
  course_link: string;
}

// Interfejs dla użytkowników (tabela `users`)
export type User = {
  id: number;
  email: string;
  username: string;
  avatar?: string;
  role:string;
  created_at?:string;
  last_login?: string; // Data ostatniego logowania
  status?: string;
}
export type TeditUser = Omit<User,"id" | "email" | "avatar" |"status"|"last_login"> 
export interface Users{
  data: User[];

}
// Interfejs dla przypisania kursu użytkownikowi (tabela `user_courses`)
export interface UserCourse {
  id: number;
  email: string;
  username: string;
}

export interface UserCourseAssignment {
  course_id: number;
  name: string;
  description: string;
  date: string;
  course_link: string;
  certificate: string;
  course_status: string;
  users: UserCourse[]; // Changed from UserCourse to UserCourse[]
}
interface CoursetoAssign {
  id: number;
  name: string;
}

// Typ dla pojedynczego użytkownika
interface UsertoAssign {
  id: number;
  email: string;
  username: string;
  role: string;
}

// Typ dla całej odpowiedzi
export interface AssignDataResponse {
  courses: CoursetoAssign[];
  user: UsertoAssign[];
}
// Odpowiedzi zawierające dane kursów, użytkowników i przypisań kursów
export type CoursesResponse = Response<Course>;
export type UsersResponse = Response<User>;
export type UserCourseAssignmentResponse = Response<UserCourseAssignment>;
type CompletedCourse = {
  id: number;
  course_name: string;
  certificate: string | null; // It could be null if there's no certificate
  course_status: string;
  date_completed: string;
};

// Define the response structure
export type CompletedCoursesResponse = {
  data: CompletedCourse[];
};