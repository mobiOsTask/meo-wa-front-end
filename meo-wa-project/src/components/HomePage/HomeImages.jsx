import React from 'react';
import { styled } from '@mui/system';
import { Container } from '@mui/material';
import man from '../../assets/man.png';
import oldDoc from '../../assets/olddoc.png';
import ladyDoc from '../../assets/ladyDoc.png';

const ImagesContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: '100%',
    // overflow: 'hidden',
});

const Image = styled('img')({
    position: 'absolute',
    objectFit: 'cover',
});

const ManImage = styled(Image)({
    width: '600px',
    height: '600px',
    top: '25px',
    right: '50px',
});

const OldDocImage = styled(Image)({
    width: '120px',
    height: '236px',
    borderRadius: '50px',
    background: '#0582CA',
    // overflow: 'hidden',
    objectPosition: '50% 50%',
})

const LadyDocImage = styled(Image)({
    width: '120px',
    height: '236px',
    borderRadius: '50px',
    background: '#0582CA',
    // overflow: 'hidden',
    objectPosition: '50% 50%',
})

const HomeImages = () => {
    return (
        <ImagesContainer >
            <OldDocImage src={oldDoc} alt="Man Image" data-aos="fade-left" sx={{ top: 300, left: -90 }} />
            <ManImage src={man} alt="Man Image" data-aos="zoom-in" />
            <LadyDocImage src={ladyDoc} alt="Man Image" data-aos="fade-right" sx={{ top: 300, left: 415 }} />
        </ImagesContainer>
    );
};

export default HomeImages;


