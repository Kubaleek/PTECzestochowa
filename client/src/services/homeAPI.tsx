// api.ts
import slugify from 'slugify';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/pte/posts',
});

const fetchData = async (endpoint: string, options?: any) => {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method: options?.method || 'GET',
      data: options?.body || {},
    });
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
export const GetPages = ({ category, subcategory }: { category: string; subcategory: string }) => {
  const formattedCategory = slugify(category).toLowerCase();
  const formattedSubcategory = slugify(subcategory).toLowerCase();
  return fetchData(`/${formattedCategory}/${formattedSubcategory}`);
};