import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/logo.png';
import bellIcon from '../assets/bellIcon.svg';

const StyledLogo = styled('img')({
    width: 140,
    marginTop: -16,
    // marginLeft: 25,
});

const StyledBellIcon = styled('img')({
    // width: 140,
    // marginTop: -16,
    // marginLeft: 25,
});

const NavbarContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
    padding: '10px 0',
});

const NavLinksContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginLeft: 185
});

const NavAccountContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginLeft: 550
});

// const PrivacyPolicyLink = styled('a')({
//     textDecoration: 'none',
//     color: '#000',
// });

const LoginButton = styled(Button)({
    border: '1px solid #000',
    borderRadius: '20px',
    padding: '5px 15px',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
});

const SignUpButton = styled(Button)({
    backgroundColor: '#A700',
    borderRadius: '20px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '15px',
    padding: '5px 15px',
    cursor: 'pointer',
});

const CustomTypography = styled(Typography)({
    // background: '#000000',
    // fontFamily: 'Arial',
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: '11px',
    fontStyle: 'bold'
    // letterSpacing: '0em',
    // textAlign: 'left',
    // width: '31px',
    // height: '11px',
    // top: '30px',
    // left: '242px',
});

const Navbar = () => {

    const handleSignUp = () => {
        console.log('Sign Up button clicked');
    };

    return (
        <NavbarContainer>
            <StyledLogo src={logo} alt='my Image' />
            <NavLinksContainer>
                <CustomTypography variant="body2">HOME</CustomTypography>
                <CustomTypography variant="body2">ABOUT</CustomTypography>
                <CustomTypography variant="body2">CONTACT</CustomTypography>
                <CustomTypography variant="body2">TERMS</CustomTypography>
                <CustomTypography variant="body2">PRIVACY POLICY</CustomTypography>
            </NavLinksContainer>
            <NavAccountContainer>
                <StyledBellIcon src={bellIcon} alt='my Image' />
                <LoginButton>LOGIN</LoginButton>
                <SignUpButton onClick={handleSignUp}>SIGN UP</SignUpButton>
            </NavAccountContainer>
        </NavbarContainer>
    )
}

export default Navbar