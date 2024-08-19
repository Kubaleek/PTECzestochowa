import { ReactElement } from "react";

export interface Article {
  subpost_id: number;
  id: number;
  image: string;
  title: string;
  subtitle: string;
  subtext: string;
  created_at: string;
}

export interface ArticlesResponse {
  data: Article[];
}

export type SocialMediaLink = [string, string, ReactElement];

export type SocialIconsProps = {
  label: string;
  icon: ReactElement;
  className: string;
  href: string;
};