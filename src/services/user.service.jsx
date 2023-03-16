import axios from 'axios';

export const getUserById = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`https://social-media-server.vercel.app/users/${userId}`, config);
  return data;
};

export const loginUser = async (values) => {
  const { data } = await axios.post(`https://social-media-server.vercel.app/auth/login`, values);
  return data;
};

export const registerUser = async (values) => {
  const { data } = await axios.post(`https://social-media-server.vercel.app/auth/register`, values);
  return data;
};

export const addRemoveFriend = async (token, userId, friendId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`https://social-media-server.vercel.app/users/${userId}/${friendId}`, {}, config);

  return data;
};

export const getFriendsOfUser = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`https://social-media-server.vercel.app/users/${userId}/friends`, config);

  return data;
};
