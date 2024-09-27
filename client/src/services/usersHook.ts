import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetNavs, GetArticles, GetPosts, GetNews, GetPages } from "./homeAPI";

import {
  PostsResponse,
  ArticlesResponse,
  NewsResponse,
  User,
  Users,
} from "../components/Home/ts/types";
import { CreateUser, GetAllUsers } from "./usersAPI";

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