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

const GetPosts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/pte/posts/lastPosts');
    return response.data
  } catch (error) {
    console.error('Błąd podczas pobierania danych nawigacji:', error);
    return [];
  }
}

const GetNews = async () => {
  try {
    const response = await axios.get('http://localhost:5000/pte/posts/lastNews');
    return response.data
  } catch (error) {
    console.error('Błąd podczas pobierania danych nawigacji:', error);
    return [];
  }
}

export const homeAPI = {
    GetNavs,
    GetArticles,
    GetPosts,
    GetNews,
}