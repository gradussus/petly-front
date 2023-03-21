import axios from 'axios';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com';

export const getFriends = async () => {
  const response = await axios.get('/friends');
  return response.data;
};
