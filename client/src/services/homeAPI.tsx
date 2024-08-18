import axios from 'axios';


const GetNavs = async () => {
  const response = await axios.get('http://localhost:3000/api/navs');
  return response.data;
}

export const homeAPI = {
    GetNavs,
}