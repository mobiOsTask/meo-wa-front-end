import React from 'react';
import Navbar from '../components/Navbar';
import HomeContainer from '../components/HomeContainer';
import Grid from '@mui/material/Unstable_Grid2';
import Sidebar from '../components/Sidebar';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Grid container >
        <Grid xs={1}><Sidebar /></Grid>
        <Grid xs={11}><HomeContainer /></Grid>
      </Grid>
    </div>
  )
}

export default HomePage;