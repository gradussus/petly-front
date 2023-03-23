import axios from 'axios';

export const fetchNoticesData = async type => {
  const response = await axios.get(`notices/${type}`);

  return response.data;
};

export const fetchNoticesUser = async (token, type) => {
  const response = await axios.get(`notices/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response.data;
};
