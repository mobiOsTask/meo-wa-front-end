import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/logo.png';
import bellIcon from '../assets/bellIcon.svg';

const StyledLogo = styled('img')({
    width: 140,
    marginTop: -16,
});

const StyledBellIcon = styled('img')({
    position: 'relative',
    zIndex: 1,
});

const BellIconRing = styled(Box)({
    position: 'absolute',
    width: '49px',
    height: '49px',
    left: 'calc(50% + 454px)',
    top: '7px',
    borderRadius: '50%',
    // backgroundColor: '#0582CA',
    border: '3.5px solid #0582CA',
    zIndex: 0,
});

const RedDot = styled(Box)({
    position: 'absolute',
    width: '5px',
    height: '5px',
    left: 'calc(50% + 490px)',
    top: '17px',
    borderRadius: '50%',
    backgroundColor: '#FF0000',
    zIndex: 2,
});

const NavbarContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
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

const CustomTypography = styled(Typography)({
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: '11px',
    fontStyle: 'bold'
});

const LoginButton = styled(Button)({
    border: '1px solid #000',
    borderRadius: '20px',
    padding: '5px 15px',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
    left: '20px',
    // height: '10',
});

// const LoginButton = styled(Button)({
//     border: '1px solid #000',
//     borderRadius: '20px',
//     padding: '5px 15px',
//     fontWeight: 700,
//     fontSize: '15px',
//     lineHeight: '17px',
//     letterSpacing: '0em',
//     textAlign: 'left',
//     cursor: 'pointer',
//     position: 'absolute',
//     width: '48px',
//     height: '17px',
//     top: '22px',
//     left: '1259px',
// });

const SignUpButton = styled(Button)({
    backgroundColor: '#A700',
    borderRadius: '20px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '15px',
    padding: '5px 15px',
    cursor: 'pointer',
    left: '20px'
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
                <BellIconRing />
                <StyledBellIcon src={bellIcon} alt='my Image' sx={{ top: -2 }} />
                <RedDot />
                <LoginButton>LOGIN</LoginButton>
                <SignUpButton onClick={handleSignUp}>SIGN UP</SignUpButton>
            </NavAccountContainer>
        </NavbarContainer>
    );
}

export default Navbar;
