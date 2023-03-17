import axios from 'axios';

export const createPost = async (token, values) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(`${process.env.REACT_APP_URL_API}/posts`, values, config);
  return data;
};

export const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/posts`, config);
  return data;
};

export const getUserPosts = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/posts/${userId}/posts`, config);
  return data;
};

export const addRemoveLike = async (token, postId, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.patch(`${process.env.REACT_APP_URL_API}/posts/${postId}/like`, { userId }, config);
  return data;
};
