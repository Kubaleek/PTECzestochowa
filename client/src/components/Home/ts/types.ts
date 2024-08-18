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
