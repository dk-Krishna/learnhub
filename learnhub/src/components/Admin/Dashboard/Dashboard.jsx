import { Box, Grid } from '@chakra-ui/react';
import React from 'react';

import cursor from '../../../assets/images/cursor.png';

// importing components
import Sidebar from '../Sidebar.jsx';

const Dashboard = () => {
  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box></Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
