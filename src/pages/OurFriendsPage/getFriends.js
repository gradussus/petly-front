const BASE_URL = 'https://petly-vxdt.onrender.com';

export const getFriends = async () => {
  const response = await fetch(`${BASE_URL}/friends`);
  const { data } = await response.json();
  return data;
};
