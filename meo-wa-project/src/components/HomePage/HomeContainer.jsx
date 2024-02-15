import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Hidden, Typography, styled } from '@mui/material';
import HomeImages from './HomeImages';

const CustomTypography = styled(Typography)(({ theme }) => ({
    width: '700px',
    //   height: '46px',
    //   top: '426px',
    //   left: '137px',
    marginBottom: '20px',
    fontFamily: 'Arial',
    fontSize: '20px',
    fontWeight: 400,
    //   lineHeight: '150px',
    letterSpacing: '0em',
    textAlign: 'left',
    //   background: '#010101',
    opacity: 0.6,
}));

const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Arial',
    fontSize: '50px',
    fontWeight: 700,
    letterSpacing: '0em',
    textAlign: 'left',
    lineHeight: '57px',
    // marginBottom: '40px',
}));

const CustomButton = styled(Button)(({ theme }) => ({
    width: '160px',
    height: '63px',
    // top: '510px',
    // left: '137px',
    borderRadius: '5px',
    background: '#0582CA',
    boxShadow: '5px 5px 8px 0px #00000040',
    // fontFamily: 'Arial',
    fontSize: '19px',
    fontWeight: 700,
    // lineHeight: '23px',
    // letterSpacing: '0.01em',
    // textAlign: 'left',
    textTransform: 'none',
}));

const HomeContainer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item md={7} xs={12}>
                    <Box sx={{ marginTop: '80px' }}>
                        <Heading sx={{ color: '#0582CA' }}>Lorem ipsum</Heading>
                        <Heading sx={{ width: '457px', marginBottom: '30px' }}>amet, consectetur elit</Heading>
                        <CustomTypography variant="body1" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                        </CustomTypography>
                        <CustomTypography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </CustomTypography>
                        <CustomButton variant="contained" color="primary" data-as="flip-up">
                            Get Started
                        </CustomButton>
                    </Box>
                </Grid>
                <Grid item md={5} xs={12}>
                    <HomeImages />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeContainer;
