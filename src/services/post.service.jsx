import axios from 'axios';

export const createPost = async (token, values) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(`https://social-media-server.vercel.app/posts`, values, config);
  return data;
};

export const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`https://social-media-server.vercel.app/posts`, config);
  return data;
};

export const getUserPosts = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`https://social-media-server.vercel.app/posts/${userId}/posts`, config);
  return data;
};

export const addRemoveLike = async (token, postId, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`https://social-media-server.vercel.app/posts/${postId}/like`, { userId }, config);
  return data;
};
