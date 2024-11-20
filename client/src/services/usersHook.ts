import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetNavs, GetArticles, GetPosts, GetNews, GetPages } from "./homeAPI";

import {
  PostsResponse,
  ArticlesResponse,
  NewsResponse,
  User,
  Users,
} from "../components/Home/ts/types";
import { CreateUser, DeleteUser, EditUser, GetAllUsers, Register } from "./usersAPI";

const createQueryFn =
  <T>(fn: () => Promise<T>) =>
  async () =>
    await fn();

  export const useUsersQuery = (
    options?: UseQueryOptions<Users, Error>
  ) =>
    useQuery({
      queryKey: ["users"],
      queryFn: createQueryFn(GetAllUsers),
      staleTime: 60000,
      ...options,
    });
    export const useAddUserMutation = (
      options?: UseMutationOptions<any, Error, any>
    ) =>
      useMutation({
        mutationFn: async (userData: any) => await CreateUser(userData),
        ...options,
      });
      export const useRegisterMutation = (
        options?: UseMutationOptions<any, Error, any>
      ) =>
        useMutation({
          mutationFn: async (userData: any) => await Register(userData),
          ...options,
        });
     

      export const useDeleteUserMutation = (
        options?: UseMutationOptions<any, Error, string>
      ) =>
        useMutation({
          mutationFn: async (email: string) => {
            const response = await DeleteUser(email);
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(response.statusText);
            }
          },
          ...options,
        });
        export const useEditUserMutation = (
          options?: UseMutationOptions<any, Error, { new_email: string; email: string; username: string; role: string }>
      ) => 
          useMutation({
              mutationFn: async ({ new_email, email, username, role }) => {
  const response = await EditUser(new_email, email, username, role);
  if (response.ok) {
    return response.json();
  } else {
    const errorMessage = await response.text();
    throw new Error(`Error: ${response.status} - ${errorMessage}`);
  }
},

              ...options,
          });
