import axios from 'axios';

const SERVER_NAME = 'https://github.com/gradussus/petly-api';

axios.defaults.baseURL = SERVER_NAME;

const getNews = async () => {
  try {
    const response = await axios.get('/news');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getNews;
