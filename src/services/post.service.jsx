import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const createPost = async (token, values) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(`${baseUrl}/posts`, values, config);
  return data;
};

export const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${baseUrl}/posts`, config);
  return data;
};

export const getUserPosts = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${baseUrl}/posts/${userId}/posts`, config);
  return data;
};

export const addRemoveLike = async (token, postId, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`${baseUrl}/posts/${postId}/like`, { userId }, config);
  return data;
};
