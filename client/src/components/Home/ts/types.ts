import { ReactElement } from "react";
import { StaticImageData } from 'next/image';

export interface BaseContent {
  id: number;
  subpost_id: number;
  title: string;
  subtitle: string;
  post_content: string;
  subpost_content:string;
  post_category: string;
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

export type HeroInfosType = {
  id: number;
  href: string;
  src: string | StaticImageData;
  alt: string;
}

export type PartnerType = {
  id: number;
  url: string;
  src: string | StaticImageData;
  name: string;
}

export interface Circle {
  cx: number;
  cy: number;
}
export interface MapProps {
  activeCircles: Circle[];
}

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