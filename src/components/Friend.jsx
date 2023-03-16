import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { setFriends } from 'state';
import FlexBetween from './FlexBetween';
import UserImage from './UserImage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRemoveFriend } from 'services/user.service';

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id: userId } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dartk;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const friends = await addRemoveFriend(token, userId, friendId);
    dispatch(setFriends({ friends }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap={'1rem'}>
        <UserImage image={userPicturePath} size='55px' />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            // Cuando vamos a la pagina del usuario, react router actualiza la url para llegar pero la pagina no actualiza sus componentes, por tanto al utilizar navigate(0) refrescamos la pagina
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant='h5'
            fontWeight={'500'}
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cursor: 'pointer',
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize={'0.75rem'}>
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton onClick={() => patchFriend()} sx={{ backgroundColor: primaryLight, p: '0.6rem' }}>
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
