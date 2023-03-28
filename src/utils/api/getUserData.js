import axios from 'axios';

export const fetchUserData = async token => {
  const response = await axios.get(`api/auth/currentUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.user;
};

export const updateUserData = async (token, credentials) => {
  const response = await axios.patch(`api/auth/updateUser`, credentials, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.user;
};

export const getUserPets = async token => {
  const response = await axios.get(`api/pets/allUserPets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createUserPets = async (token, credentials, image) => {
  const response = await axios.post(
    `api/pets/create`,
    {
      image,
      ...credentials,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const removeUserPets = async (token, id) => {
  const response = await axios.delete(`api/pets/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getFriends = async () => {
  const response = await axios.get('/friends');

  return response.data;
};

export const updateAvatar = async (token, avatar) => {
  const response = await axios.patch(
    `api/auth/avatars`,
    {
      image: avatar,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
