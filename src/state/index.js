import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
  reloadPosts: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, { payload }) => {
      if (state.user) {
        state.user.friends = payload.friends;
      } else {
        console.error('User friends non-existent');
      }
    },
    setPosts: (state, { payload }) => {
      state.posts = payload.posts;
      state.reloadPosts = true;
    },
    setPost: (state, { payload }) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === payload.post._id) return payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setReloadPosts: (state, { payload }) => {
      state.reloadPosts = payload;
    },
  },
});

export const { setFriends, setLogin, setLogout, setMode, setPost, setPosts, resetCreatedPost, setReloadPosts } =
  authSlice.actions;
export default authSlice.reducer;
