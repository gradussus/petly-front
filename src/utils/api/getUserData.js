import axios from 'axios';

export const fetchUserData = async token => {
  const responseTrending = await axios.get(`api/auth/currentUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return responseTrending.data.user;
};

export const updateUserData = async (token, credentials) => {
  const responseTrending = await axios.patch(
    `api/auth/updateUser`,
    credentials,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return responseTrending.data.user;
};

export const getUserPets = async token => {
  const responseTrending = await axios.get(`api/pets/allUserPets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return responseTrending.data;
};

export const removeUserPets = async (token, id) => {
  const responseTrending = await axios.delete(`api/pets/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return responseTrending.data;
};
