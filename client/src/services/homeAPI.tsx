// api.ts
import slugify from 'slugify';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/pte/posts',
});

const fetchData = async (endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Błąd podczas pobierania danych z ${endpoint}:`, error);
    throw error;
  }
};

export const GetNavs = () => fetchData('/menu');
export const GetArticles = () => fetchData('/lastArticles');
export const GetPosts = () => fetchData('/lastPosts');
export const GetNews = () => fetchData('/lastNews');
// export const GetPages = (category: string, subcategory: string) =>
//   fetchData(`/${slugify(category).toLowerCase()}/${slugify(subcategory).toLowerCase()}`);