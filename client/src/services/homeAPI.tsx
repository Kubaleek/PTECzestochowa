import axios from 'axios';


const GetNavs = async () => {
  try {
    const response = await axios.get('http://localhost:5000/pte/posts/menu');
    return response.data
  } catch (error) {
    console.error('Błąd podczas pobierania danych nawigacji:', error);
    return [];
  }
}

const GetArticles = async () => {
  try {
    const response = await axios.get('http://localhost:5000/pte/posts/lastArticles');
    return response.data
  } catch (error) {
    console.error('Błąd podczas pobierania danych nawigacji:', error);
    return [];
  }
}

export const homeAPI = {
    GetNavs,
    GetArticles,
}