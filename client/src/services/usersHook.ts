import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetNavs, GetArticles, GetPosts, GetNews, GetPages } from "./homeAPI";

import {
  PostsResponse,
  ArticlesResponse,
  NewsResponse,
} from "../components/Home/ts/types";

const createQueryFn =
  <T>(fn: () => Promise<T>) =>
  async () =>
    await fn();