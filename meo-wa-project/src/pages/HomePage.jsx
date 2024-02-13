import React from 'react';
import Navbar from '../components/Navbar';
import HomeContainer from '../components/HomeContainer';
import Grid from '@mui/material/Unstable_Grid2';
import Sidebar from '../components/Sidebar';
import AOS from 'aos';
import { useEffect } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])

  return (
    <div>
      {/* <Navbar /> */}
      <ResponsiveAppBar />
      <Grid container >
        <Grid xs={1}><Sidebar /></Grid>
        <Grid xs={11}><HomeContainer /></Grid>
      </Grid>
    </div>
  )
}

export default HomePage;