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
  return response.data;
};

export const fetchUserFavorite = async token => {
  const response = await axios.get(`notices/favorite`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addFavorite = async (token, id) => {
  const response = await axios.post(
    `notices/add_favorite/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const removeFavorite = async (token, id) => {
  const response = await axios.post(
    `notices/remove_favorite/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
