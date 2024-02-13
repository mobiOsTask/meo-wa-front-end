import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import logo from '../assets/logo.png';
import bell from '../assets/Ellipse_1.png';
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const AppBarTab = styled(Typography)(({ selected }) => ({
  fontSize: '10px',
  fontWeight: 700,
  lineHeight: '11px',
  fontStyle: 'bold',
  cursor: 'pointer',
  position: 'relative',
  color: 'black',
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
    transition: 'background-color 0.2s ease-in-out',
  },
  '&:hover::after': {
    backgroundColor: '#0582CA',
  },
}));

const LoginButton = styled(Button)({
  width: '79px',
  height: '85px',
  top: '-24px',
  color: '#000000',
  fontWeight: '700',
  fontSize: '15px',
  padding: '30px 5px 0px 5px',
  background: '#FFFFFF',
  border: '2px solid #000000',
  borderRadius: '20px',
});

const SignUpButton = styled(Button)({
  width: '79px',
  height: '85px',
  top: '-24px',
  color: '#FFFFFF',
  fontWeight: '700',
  fontSize: '15px',
  padding: '30px 5px 0px 5px',
  background: '#000000',
  border: '2px solid #000000',
  borderRadius: '20px',
  '&:hover': {
    background: '#FFFFFF',
    color: '#000000',
  },
});

const ResponsiveAppBar = () => {
  const [selectedLink, setSelectedLink] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavLinkClick = (link) => {
    navigate(link);
    setSelectedLink(link);
  };

  return (
    <>
      <AppBar sx={{ background: 'white', boxShadow: 'none' }} elevation={0}>
        <Toolbar>
          <img src={logo} alt='my Image' style={{ width: 140, marginTop: -16 }} />
          <Box sx={{ display: 'flex', gap: 3, marginLeft: isMediumOrSmaller ? 'auto' : 15 }} >
            <AppBarTab
              selected={selectedLink === '/home'}
              onClick={() => handleNavLinkClick('/home')}
            >
              HOME
            </AppBarTab>
            <AppBarTab
              selected={selectedLink === '/about'}
              onClick={() => handleNavLinkClick('/about')}
            >
              ABOUT
            </AppBarTab>
            <AppBarTab
              selected={selectedLink === '/about'}
              onClick={() => handleNavLinkClick('/about')}
            >
              CONTACT
            </AppBarTab>
            <AppBarTab
              selected={selectedLink === '/about'}
              onClick={() => handleNavLinkClick('/about')}
            >
              TERMS
            </AppBarTab>
            <AppBarTab
              selected={selectedLink === '/about'}
              onClick={() => handleNavLinkClick('/about')}
            >
              PRIVACY POLICY
            </AppBarTab>
          </Box>
          <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
            <img src={bell} alt='my Image' style={{ width: 50, height: 50, marginTop: 8, marginRight: '10px', cursor: 'pointer' }} />
            <LoginButton onClick={() => (navigate('/login'))} >LOGIN</LoginButton>
            <SignUpButton >SIGN UP</SignUpButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default ResponsiveAppBar