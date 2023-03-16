import axios from 'axios';

export const createPost = async (token, values) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(`http://localhost:3001/posts`, values, config);
  return data;
};

export const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`http://localhost:3001/posts`, config);
  return data;
};

export const getUserPosts = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`http://localhost:3001/posts/${userId}/posts`, config);
  return data;
};

export const addRemoveLike = async (token, postId, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`http://localhost:3001/posts/${postId}/like`, { userId }, config);
  return data;
};
