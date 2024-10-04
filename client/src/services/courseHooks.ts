import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import {
  AssignCourse,
  AddCourse,
  GetAllCourses,
  GetCoursesByUser,
  GetCoursesWithUsers,
  IsCourseAssigned,
  CheckUserActivity,
  EditCourse,
  EditUpdateCourse,
  getAssignData,
  DeleteCourse,
  DeleteCourseName,
  DeleteUserCourse,
  DeleteUserFromCourse,
  getCompletedCourses,
} from "./courseAPI";

import {
  CoursesResponse,
  UsersResponse,
  UserCourseAssignmentResponse,
  AssignDataResponse,
  CompletedCoursesResponse,
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
  export const useCompletedCoursesQuery = (
    userID: string,
    options?: UseQueryOptions<CompletedCoursesResponse, Error>
  ) =>
    useQuery<CompletedCoursesResponse, Error>({
      queryKey: ['completedCourses', userID], // Unique query key based on userID
      queryFn: () => getCompletedCourses(userID), // Fetch the completed courses
      staleTime: 60000, // Data is considered fresh for 1 minute
      ...options, // Merge any additional options
    });
  export const useGetAssignData = (
    options?: UseQueryOptions<AssignDataResponse, Error>
  ) =>
    useQuery({
      queryKey: ["UsersAndCourses"],
      queryFn: createQueryFn(getAssignData),
      staleTime: 60000,
      ...options,
    });
  
// Hook do pobierania wszystkich użytkowników

// Hook do pobierania przypisań kursów do użytkowników
export const useCoursesWithUsersQuery = (
  options?: UseQueryOptions<UserCourseAssignmentResponse, Error>
) =>
  useQuery({
    queryKey: ["coursesWithUsers"],
    queryFn: createQueryFn(GetCoursesWithUsers),
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
    queryFn: createQueryFn(() => GetCoursesByUser(userId)),
    staleTime: 60000,
    ...options,
  });

// Hook do dodawania nowego kursu
export const useAddCourseMutation = (
  options?: UseMutationOptions<any, Error, any>
) =>
  useMutation({
    mutationFn: async (courseData: any) => await AddCourse(courseData),
    ...options,
  });

  export const useAssignMutation = (
    options?: UseMutationOptions<any, Error, any>
  ) =>
    useMutation({
      mutationFn: async (data: any) => await AssignCourse(data),
      ...options,
    });
  export const useDeleteCourseMutation = (
    options?: UseMutationOptions<any, Error, string>
  ) =>
    useMutation({
      mutationFn: async (courseId: string) => await DeleteCourse(courseId),
      ...options,
    });
    
    export const useEditCourseMutation = (
      options?: UseMutationOptions<any, Error, any>
    ) =>
      useMutation({
        mutationFn: async (courseData: any) => await EditCourse(courseData), // The mutation function calls EditCourse
        ...options, // Pass any additional options
      });
      export const useDeleteUserFromCourseMutation = (
        options?: UseMutationOptions<any, Error, { userID: number; courseID: number }>
      ) =>
        useMutation({
          mutationFn: async (courseData: { userID: number; courseID: number }) => 
            await DeleteUserFromCourse(courseData.userID, courseData.courseID),
          ...options,
        });
      