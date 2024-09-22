import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { 
  GetAllCourses, 
  GetAllUsers, 
  GetCoursesWithUser, 
  GetCourseByUser, 
  GetCorusesByStatus 
} from "./courseAPI";

import {
  CoursesResponse,
  UsersResponse,
  UserCourseAssignmentResponse,
} from "../components/Home/ts/types";

// Funkcja pomocnicza do tworzenia zapytań
const createQueryFn =
  <T>(fn: () => Promise<T>) =>
  async () =>
    await fn();

// Hook do pobierania wszystkich kursów
export const useCoursesQuery = (
  options?: UseQueryOptions<CoursesResponse, Error>
) =>
  useQuery({
    queryKey: ["courses"],
    queryFn: createQueryFn(GetAllCourses),
    staleTime: 60000,
    ...options,
  });

// Hook do pobierania wszystkich użytkowników
export const useUsersQuery = (
  options?: UseQueryOptions<UsersResponse, Error>
) =>
  useQuery({
    queryKey: ["users"],
    queryFn: createQueryFn(GetAllUsers),
    staleTime: 60000,
    ...options,
  });

// Hook do pobierania przypisań kursów do użytkowników
export const useCoursesWithUsersQuery = (
  options?: UseQueryOptions<UserCourseAssignmentResponse, Error>
) =>
  useQuery({
    queryKey: ["coursesWithUsers"],
    queryFn: createQueryFn(GetCoursesWithUser),
    staleTime: 60000,
    ...options,
  });

// Hook do pobierania kursów przypisanych do danego użytkownika
export const useCourseByUserQuery = (
  userId: string,
  options?: UseQueryOptions<UserCourseAssignmentResponse, Error>
) =>
  useQuery({
    queryKey: ["courseByUser", userId],
    queryFn: createQueryFn(() => GetCourseByUser(userId)),
    staleTime: 60000,
    ...options,
  });

// Hook do pobierania kursów przypisanych do użytkownika z określonym statusem (np. ukończone)
export const useCoursesByStatusQuery = (
  userId: string,
  status: string = "Ukończony",
  options?: UseQueryOptions<UserCourseAssignmentResponse, Error>
) =>
  useQuery({
    queryKey: ["coursesByStatus", userId, status],
    queryFn: createQueryFn(() => GetCorusesByStatus(userId, status)),
    staleTime: 60000,
    ...options,
  });
