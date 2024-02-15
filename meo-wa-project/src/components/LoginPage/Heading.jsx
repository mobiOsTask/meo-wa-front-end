import React from 'react';
import { Typography } from '@mui/material';
import img71 from '../../assets/img_rectangle71.png';


const Heading = () => {
    return (
        <>
            <Typography fontWeight="700" fontStyle="Arial" fontSize="50px">
                WELCOME BACK TO
            </Typography>
            <img
                src={img71}
                alt=""
                style={{ width: "370px", height: "63px", marginLeft: "70px" }}
            />
        </>
    )
}

export default Heading;