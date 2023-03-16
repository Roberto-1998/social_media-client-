import axios from 'axios';

export const createPost = async (token, values) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(`/posts`, values, config);
  return data;
};

export const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`/posts`, config);
  return data;
};

export const getUserPosts = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`/posts/${userId}/posts`, config);
  return data;
};

export const addRemoveLike = async (token, postId, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`/posts/${postId}/like`, { userId }, config);
  return data;
};
