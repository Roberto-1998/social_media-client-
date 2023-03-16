import axios from 'axios';

export const getUserById = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`http://localhost:3001/users/${userId}`, config);
  return data;
};

export const loginUser = async (values) => {
  const { data } = await axios.post('http://localhost:3001/auth/login', values);
  return data;
};

export const registerUser = async (values) => {
  const { data } = await axios.post('http://localhost:3001/auth/register', values);
  return data;
};

export const addRemoveFriend = async (token, userId, friendId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`http://localhost:3001/users/${userId}/${friendId}`, {}, config);

  return data;
};

export const getFriendsOfUser = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`http://localhost:3001/users/${userId}/friends`, config);

  return data;
};
