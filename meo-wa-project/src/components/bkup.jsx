// import React from 'react';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// // import Img from './Img'; // Assuming you have a custom Img component

// const Navbar = () => {
//     return (
//         <Container>
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     display: 'flex',
//                     flexDirection: { xs: 'column', md: 'row' },
//                     gap: 5,
//                     insetX: 0,
//                     items: 'start',
//                     justify: 'start',
//                     maxWidth: '1412px',
//                     mx: 'auto',
//                     px: { md: 5 },
//                     top: 0,
//                     width: 'full',
//                 }}
//             >
//                 {/* <Img
//                     sx={{
//                         flex: { md: 1 },
//                         height: ['52px', 'auto'],
//                         mt: { md: 0, xs: 1 },
//                         objectFit: 'cover',
//                         width: ['10%', 'full'],
//                     }}
//                     src="images/img_rectangle71_52x137.png"
//                     alt="rectangleSeventyOne"
//                 /> */}
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flex: { md: 1 },
//                         flexDirection: 'column',
//                         items: 'start',
//                         justify: 'start',
//                         ml: { md: 0, xs: '100px' },
//                         mt: { md: 0, xs: '29px' },
//                         width: ['18%', 'full'],
//                         md: { width: 'full', ml: 0 },
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             flex: '1',
//                             display: 'flex',
//                             flexDirection: 'row',
//                             items: 'center',
//                             justify: 'between',
//                             ml: { md: 0, xs: '5px' },
//                             width: ['99%', 'full'],
//                             md: { width: 'full', ml: 0 },
//                         }}
//                     >
//                         <Typography sx={{ fontSize: '10px', color: 'black.900' }}>
//                             HOME
//                         </Typography>
//                         <Typography sx={{ fontSize: '10px', color: 'black.900' }}>
//                             ABOUT
//                         </Typography>
//                         <Typography sx={{ fontSize: '10px', color: 'black.900' }}>
//                             CONTACT
//                         </Typography>
//                         <Typography
//                             sx={{
//                                 fontSize: '10px',
//                                 color: 'black.900',
//                                 textAlign: 'center',
//                             }}
//                         >
//                             TERMS
//                         </Typography>
//                     </Box>
//                     <Box
//                         sx={{
//                             backgroundColor: 'lightBlue.700',
//                             height: '5px',
//                             mt: '3px',
//                             rounded: 'sm',
//                             width: ['16%', 'full'],
//                         }}
//                     />
//                 </Box>
//                 {/* <a
//                     href="javascript:"
//                     style={{
//                         marginLeft: '34px',
//                         marginTop: { md: 0, xs: '29px' },
//                         fontSize: '10px',
//                         color: 'black.900',
//                     }}

//                 >
//                     <Typography sx={{ fontWeight: 'bold' }}>PRIVACY POLICY</Typography>
//                 </a> */}
//                 <a
//                     href="#"
//                     onClick={() => {
//                         // Your JavaScript logic here
//                         console.log('Link clicked');
//                     }}
//                     style={{
//                         marginLeft: '34px',
//                         marginTop: { md: 0, xs: '29px' },
//                         fontSize: '10px',
//                         color: 'black.900',
//                     }}
//                 >
//                     <Typography sx={{ fontWeight: 'bold' }}>PRIVACY POLICY</Typography>
//                 </a>

//                 <Box
//                     sx={{
//                         height: '50px',
//                         ml: { md: 0, xs: '559px' },
//                         mt: { md: 0, xs: '7px' },
//                         position: 'relative',
//                         width: '50px',
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             height: '50px',
//                             m: 'auto',
//                             width: '50px',
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 backgroundColor: 'lightBlue.700',
//                                 height: '50px',
//                                 m: 'auto',
//                                 rounded: '50%',
//                                 width: '50px',
//                             }}
//                         />
//                         <Box
//                             sx={{
//                                 absolute: true,
//                                 backgroundColor: 'red.A700',
//                                 height: '5px',
//                                 right: '26%',
//                                 rounded: 'sm',
//                                 top: '20%',
//                                 width: '5px',
//                             }}
//                         />
//                     </Box>
//                     <Img
//                         sx={{
//                             absolute: true,
//                             height: '25px',
//                             inset: 0,
//                             justify: 'center',
//                             m: 'auto',
//                         }}
//                         src="images/img_vector.svg"
//                         alt="vector"
//                     />
//                 </Box>
//                 {/* <Button
//                     sx={{
//                         color: 'black.900',
//                         border: '1px solid black.900',
//                         cursor: 'pointer',
//                         fontWeight: 'bold',
//                         leading: 'normal',
//                         minW: '74px',
//                         ml: { md: 0, xs: '27px' },
//                         rounded: '20px',
//                         fontSize: '15px',
//                         textAlign: 'center',
//                     }}
//                     size="small"
//                 >
//                     LOGIN
//                 </Button> */}
//                 <Button
//                     sx={{
//                         color: 'black.900',
//                         border: '1px solid black.900',
//                         cursor: 'pointer',
//                         fontWeight: 'bold',
//                         leading: 'normal',
//                         minWidth: '74px',
//                         ml: { md: 0, xs: '27px' },
//                         borderRadius: '20px',
//                         fontSize: '15px',
//                         textAlign: 'center',
//                     }}
//                     size="small"
//                 >
//                     LOGIN
//                 </Button>

//                 <Button
//                     sx={{
//                         cursor: 'pointer',
//                         fontWeight: 'bold',
//                         leading: 'normal',
//                         minW: '78px',
//                         ml: '3.5',
//                         md: { ml: 0 },
//                         rounded: '20px',
//                         fontSize: '15px',
//                         textAlign: 'center',
//                     }}
//                     color="black.900"
//                     size="small"
//                 >
//                     SIGN UP
//                 </Button>
//             </Box>
//         </Container>
//     );
// };

// export default Navbar;


// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { styled } from '@mui/system';

// const NavbarContainer = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   padding: '10px 0',
// });

// const NavLinksContainer = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '10px',
// });

// const PrivacyPolicyLink = styled('a')({
//   textDecoration: 'none',
//   color: '#000',
// });

// const LoginButton = styled(Button)({
//   border: '1px solid #000',
//   borderRadius: '20px',
//   padding: '5px 15px',
//   fontWeight: 'bold',
//   fontSize: '15px',
//   cursor: 'pointer',
// });

// const SignUpButton = styled(Button)({
//   backgroundColor: '#A700',
//   borderRadius: '20px',
//   color: '#000',
//   fontWeight: 'bold',
//   fontSize: '15px',
//   padding: '5px 15px',
//   cursor: 'pointer',
// });

// const Navbar = () => {
//   const handleSignUp = () => {
//     console.log('Sign Up button clicked');
//   };

//   return (
//     <NavbarContainer>
//       <NavLinksContainer>
//         <Typography variant="body2">HOME</Typography>
//         <Typography variant="body2">ABOUT</Typography>
//         <Typography variant="body2">CONTACT</Typography>
//         <Typography variant="body2">TERMS</Typography>
//       </NavLinksContainer>
//       <LoginButton>LOGIN</LoginButton>
//       <SignUpButton onClick={handleSignUp}>SIGN UP</SignUpButton>
//       <PrivacyPolicyLink href="javascript:">
//         <Typography variant="body2">PRIVACY POLICY</Typography>
//       </PrivacyPolicyLink>
//     </NavbarContainer>
//   );
// };

// export default Navbar;