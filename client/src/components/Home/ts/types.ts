import { ReactElement } from "react";

export interface BaseContent {
  subpost_id: number;
  id: number;
  title: string;
  subtitle: string;
  subtext: string;
  created_at: string;
}

export interface Article extends BaseContent {
  image: string;
}

export interface Posts extends BaseContent {
  post_id: number;
}

export interface News extends BaseContent {
  post_id: number;
}
export interface Response<T> {
  data: T[];
}

export type ArticlesResponse = Response<Article>;
export type PostsResponse = Response<Posts>;
export type NewsResponse = Response<News>;

export type SocialMediaLink = [string, string, ReactElement];

export type SocialIconsProps = {
  label: string;
  icon: ReactElement;
  className: string;
  href: string;
};
