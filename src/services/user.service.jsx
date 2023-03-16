import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;

export const getUserById = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${baseUrl}/users/${userId}`, config);
  return data;
};

export const loginUser = async (values) => {
  const { data } = await axios.post(`${baseUrl}/auth/login`, values);
  return data;
};

export const registerUser = async (values) => {
  const { data } = await axios.post(`${baseUrl}/auth/register`, values);
  return data;
};

export const addRemoveFriend = async (token, userId, friendId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`${baseUrl}/users/${userId}/${friendId}`, {}, config);

  return data;
};

export const getFriendsOfUser = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${baseUrl}/users/${userId}/friends`, config);

  return data;
};
