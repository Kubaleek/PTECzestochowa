import slugify from 'slugify';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();
const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/pte/posts`,
  headers: {
    'Content-Type': 'application/json', // domyślnie dla wszystkich żądań
  },
});


const fetchData = async (endpoint: string, options?: any) => {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method: options?.method || 'GET',
      data: options?.body || {},
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`, // use env variable for the token
      },
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
