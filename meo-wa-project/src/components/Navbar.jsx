import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/logo.png';
import bellIcon from '../assets/bellIcon.svg';
import { useNavigate } from "react-router-dom";

const StyledLogo = styled('img')({
    width: 140,
    marginTop: -16,
});

const BellContainer = styled(Box)({
    // position: 'relative',
    cursor: 'pointer',
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
    // cursor: 'pointer',
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
    marginLeft: 185,
});

const NavAccountContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginLeft: 550
});

// const CustomTypography = styled(Typography)({
//     fontSize: '10px',
//     fontWeight: 700,
//     lineHeight: '11px',
//     fontStyle: 'bold',
//     cursor: 'pointer',
// });

const CustomTypography = styled(Typography)(({ selected, theme }) => ({
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: '11px',
    fontStyle: 'bold',
    cursor: 'pointer',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '40px',
        height: '5px',
        top: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '5px',
        backgroundColor: selected ? '#0582CA' : 'transparent',
        transition: 'background-color 0.2s ease-in-out', // Add transition property
    },
    '&:hover::after': {
        backgroundColor: '#0582CA',
    },
}));

const LoginButton = styled(Button)({
    position: 'absolute',
    width: '79px',
    height: '85px',
    // left: '1346px',
    right: '140px',
    // left: '20px',
    top: '-24px',
    color: '#000000',
    fontWeight: '700',
    fontSize: '15px',
    // lineHeight: '17.25px',
    padding: '30px 5px 0px 5px',
    background: '#FFFFFF',
    border: '2px solid #000000',
    borderRadius: '20px',
    // cursor: 'pointer',
    // '&:hover': {
    //     background: '#000000',
    //     color: '#FFFFFF',
    // },
});

const SignUpButton = styled(Button)({
    position: 'absolute',
    width: '79px',
    height: '85px',
    // left: '1346px',
    right: '40px',
    // left: '20px',
    top: '-24px',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '15px',
    // lineHeight: '17.25px',
    padding: '30px 5px 0px 5px',
    background: '#000000',
    border: '2px solid #000000',
    borderRadius: '20px',
    '&:hover': {
        background: '#FFFFFF',
        color: '#000000',
    },
});

const Navbar = () => {
    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState(''); // Add this line

    const handleNavLinkClick = (link) => {
        navigate(link);
        setSelectedLink(link); // Update the selected link
    };
    const handleSignUp = () => {
        console.log('Sign Up button clicked');
    };

    return (
        <NavbarContainer>
            <StyledLogo src={logo} alt='my Image' />
            <NavLinksContainer>
                <CustomTypography
                    variant="body2"
                    selected={selectedLink === '/home'} // Check if it's the selected link
                    onClick={() => handleNavLinkClick('/home')}
                >
                    HOME
                </CustomTypography>
                <CustomTypography
                    variant="body2"
                    selected={selectedLink === '/about'} // Check if it's the selected link
                    onClick={() => handleNavLinkClick('/about')}
                >
                    ABOUT
                </CustomTypography>
                <CustomTypography
                    variant="body2"
                    selected={selectedLink === '/about'} // Check if it's the selected link
                    onClick={() => handleNavLinkClick('/about')}
                >
                    CONTACT
                </CustomTypography>
                <CustomTypography
                    variant="body2"
                    selected={selectedLink === '/about'} // Check if it's the selected link
                    onClick={() => handleNavLinkClick('/about')}
                >
                    TERMS
                </CustomTypography>
                <CustomTypography
                    variant="body2"
                    selected={selectedLink === '/about'} // Check if it's the selected link
                    onClick={() => handleNavLinkClick('/about')}
                >
                    PRIVACY POLICY
                </CustomTypography>
            </NavLinksContainer>
            <NavAccountContainer>
                <BellContainer>
                    <BellIconRing />
                    <StyledBellIcon src={bellIcon} alt='my Image' sx={{ top: -2 }} />
                    <RedDot />
                </BellContainer>
                <LoginButton onClick={() => (navigate('/login'))} data-as="slide-down" >LOGIN</LoginButton>
                <SignUpButton onClick={handleSignUp} data-as="slide-down">SIGN UP</SignUpButton>
            </NavAccountContainer>
        </NavbarContainer>
    );
}

export default Navbar;