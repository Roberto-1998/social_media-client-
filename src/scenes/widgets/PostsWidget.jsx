import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, setReloadPosts } from 'state';
import PostWidget from './PostWidget';
import { getAllPosts, getUserPosts } from 'services/post.service';

const PostsWidget = ({ userId, isProfile }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const token = useSelector((state) => state.token);
  const reloadPosts = useSelector((state) => state.reloadPosts);

  const getPosts = useCallback(async () => {
    const posts = await getAllPosts(token);
    dispatch(setPosts({ posts }));
    dispatch(setReloadPosts(false));
  }, [dispatch, token]);

  const getUserAllPosts = useCallback(async () => {
    const posts = await getUserPosts(userId, token);
    dispatch(setPosts({ posts }));
    dispatch(setReloadPosts(false));
  }, [dispatch, token, userId]);

  useEffect(() => {
    if (isProfile) {
      getUserAllPosts();
    } else {
      getPosts();
    }
    dispatch(setReloadPosts(false));

    if (reloadPosts) {
      if (isProfile) {
        getUserAllPosts();
      } else {
        getPosts();
      }
      dispatch(setReloadPosts(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProfile]);

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
