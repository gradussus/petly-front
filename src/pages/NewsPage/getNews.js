import axios from 'axios';

const SERVER_NAME = 'https://petly-vxdt.onrender.com';

axios.defaults.baseURL = SERVER_NAME;

export const getNews = async () => {
  const response = await fetch(`${SERVER_NAME}/news`);
  const result = response.json();
  return result;
};

export default getNews;
