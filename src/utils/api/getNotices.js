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

export const fetchModal = async id => {
  const response = await axios.get(`notices/find_notice/${id}`);

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

export const removePersonalNotice = async (token, id) => {
  const response = await axios.delete(`notices/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchPersonalNoticesUser = async token => {
  const response = await axios.get(`notices/own`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchSearchNotices = async (type, search) => {
  const response = await axios.get(`notices/search/${type}/${search}`);

  return response.data;
};
