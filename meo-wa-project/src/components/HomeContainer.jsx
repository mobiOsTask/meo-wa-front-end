// import React from 'react';
// import { Grid, Button, Typography, Item } from '@mui/material';
// import { styled } from '@mui/system';
// // Import other components and assets as needed

// const CustomGridContainer = styled(Grid)({
//   // Add custom styles for the grid container if needed
// });

// const CustomGridItem = styled(Grid)({
//   // Add custom styles for grid items if needed
// });

// const CustomText = styled(Typography)({
//   // Add custom styles for text components if needed
// });

// const CustomButton = styled(Button)({
//   // Add custom styles for button components if needed
// });

// const CustomImage = styled('img')({
//   // Add custom styles for image components if needed
// });

// const HomeContainer = () => {
//   return (
//     <CustomGridContainer container>
//       {/* Grid Item 1 */}
//       <CustomGridItem item xs={12} md={6}>
//         <CustomText>
//           Lorem ipsum <br />
//           amet, consectetur <br />
//           elit
//         </CustomText>
//         {/* Continue with other text components */}
//       </CustomGridItem>

//       {/* Grid Item 2 */}
//       <CustomGridItem item xs={12} md={6}>
//         {/* Continue with the rest of your components */}
//         <CustomButton>
//           Get Started
//         </CustomButton>
//         {/* Continue with other components */}
//       </CustomGridItem>
//     </CustomGridContainer>
//   );
// };

// export default HomeContainer;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid md={11} lg={6} xs={11}>
          <Item>xs=8</Item>
        </Grid>
        <Grid md={11} lg={6} xs={11}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}