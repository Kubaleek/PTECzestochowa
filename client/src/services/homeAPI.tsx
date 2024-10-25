import slugify from 'slugify';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://czestochowapte.pl/backend/pte/posts',
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

export const GetPages = ({ category, id, subid }: { category: string; id?: string; subid?: string }) => {
  const formattedCategory = slugify(category, { lower: true });
  let endpoint = `/${formattedCategory}?id=${id || ''}${subid ? `&subid=${subid}` : ""}`;
  
 

  return fetchData(endpoint);
};
