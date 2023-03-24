import axios from 'axios';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com';

const getNews = async () => {
  try {
    const response = await axios.get('/news');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getNews;
