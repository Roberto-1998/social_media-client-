import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CircularProgress size={'50px'} />
    </Box>
  );
};

export default Loader;
