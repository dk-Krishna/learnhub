import { Box, Grid } from '@chakra-ui/react';
import React from 'react';

import cursor from '../../../assets/images/cursor.png';

// importing components
import Sidebar from '../Sidebar.jsx';

const AdminCourses = () => {
  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box>Admin Courses</Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;
