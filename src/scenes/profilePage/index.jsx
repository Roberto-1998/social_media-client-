import { Box, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from 'scenes/navbar';
import FriendListWidget from 'scenes/widgets/FriendListWidget';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import UserWidget from 'scenes/widgets/UserWidget';
import { getUserById } from 'services/user.service';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreen = useMediaQuery('(min-width:1000px)');

  const getUser = async () => {
    const user = await getUserById(token, userId);
    setUser(user);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width={'100%'}
        padding={'2rem 6%'}
        display={isNonMobileScreen ? 'flex' : 'block'}
        gap={'2rem'}
        justifyContent={'center'}
      >
        <Box flexBasis={isNonMobileScreen ? '26%' : undefined}>
          <UserWidget picturePath={user.picturePath} userId={userId} />
          <Box m={'2rem 0'}></Box>
          <FriendListWidget userId={userId} />
        </Box>

        <Box flexBasis={isNonMobileScreen ? '42%' : undefined} mt={isNonMobileScreen ? undefined : '2rem'}>
          <MyPostWidget picturePath={user.picturePath} />
          <Box m={'2rem 0'}></Box>

          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
