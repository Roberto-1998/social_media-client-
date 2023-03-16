import { Box, Typography, useTheme } from '@mui/material';
import Friend from 'components/Friend';
import WidgetWrapper from 'components/WidgetWrapper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsOfUser } from 'services/user.service';
import { setFriends } from 'state';

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const friends = await getFriendsOfUser(token, userId);
    dispatch(
      setFriends({
        friends,
      })
    );
  };

  useEffect(() => {
    getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WidgetWrapper>
      <Typography color={palette.neutral.dark} variant='h5' fontWeight={'500'} sx={{ mb: '1.5rem' }}>
        Friend List
      </Typography>
      <Box display={'flex'} flexDirection={'column'} gap={'1.5rem'}>
        {friends.map((friend, index) => (
          <Friend
            key={`${friend._id}-${index}`}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
