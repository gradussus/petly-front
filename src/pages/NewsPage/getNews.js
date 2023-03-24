import axios from 'axios';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com';

export const getNews = async () => {
  const response = await axios.get('/news');
  return response.data;
};
