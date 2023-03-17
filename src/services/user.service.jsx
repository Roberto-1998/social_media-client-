import axios from 'axios';

export const getUserById = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/users/${userId}`, config);
  return data;
};

export const loginUser = async (values) => {
  const { data } = await axios.post(`${process.env.REACT_APP_URL_API}/auth/login`, values);
  return data;
};

export const registerUser = async (values) => {
  const { data } = await axios.post(`${process.env.REACT_APP_URL_API}/auth/register`, values);
  return data;
};

export const addRemoveFriend = async (token, userId, friendId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`${process.env.REACT_APP_URL_API}/users/${userId}/${friendId}`, {}, config);

  return data;
};

export const getFriendsOfUser = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/users/${userId}/friends`, config);

  return data;
};
