import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import browse from '../assets/browse.png';
import dashboard from '../assets/dashboard.png';
import helpSupport from '../assets/help&support.png';

const SidebarContainer = styled(Box)({
    position: 'absolute',
    bottom: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    left: '1%',
    px: '5',
    width: '6%',
});

const StyledImage = styled('img')({
    height: '30px',
    width: '30px',
    objectFit: 'cover',
});

const StyledText = styled(Typography)({
    marginTop: '8px',
    marginBottom: '30px',
    fontSize: '10px',
    textAlign: 'center',
    color: '#0582CA',
    width: '53px',
    height: '11px',
    top: '623px',
    left: '26px',
    fontFamily: 'Arial',
    fontWeight: 700,
    lineHeight: '11px',
    letterSpacing: '0em',
});

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="start"
                marginTop="29px"
                width="51%"
                md={{ width: '100%' }}
            >
                <StyledImage src={dashboard} alt="rectangle202" />
                <StyledText variant="txtArialBoldMT10Lightblue700">Dashboard</StyledText>
                <StyledImage src={browse} alt="rectangle203" />
                <StyledText variant="txtArialBoldMT10Lightblue700">Browse</StyledText>
                <StyledImage
                    src={helpSupport}
                    alt="rectangle205"
                    marginTop="29px"
                />
                <StyledText variant="txtArialBoldMT10Lightblue700">
                    Help & Support
                </StyledText>
            </Box>
        </SidebarContainer>
    );
};

export default Sidebar;
