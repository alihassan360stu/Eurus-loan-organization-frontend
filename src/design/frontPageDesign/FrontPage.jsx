import { Box, Typography, Button, Grid, Paper, Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { BoxesDesign } from './BoxesDesign';
import { Link } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';

export const FrontPage = () => {
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint.sm)
    return (
        <>
            <Box disableGutters bgcolor="rgb(215, 224, 225)" minHeight="60vh" color="#662d91" overflow="hidden" mt="3px" maxWidth="xl">
                <Box style={{ margin: "5vh 0 3vh 0" }}>
                    <Typography align='center' variant={isBreakPoint ? "h3" : "h1"}>Orbis Lending Demo</Typography>
                </Box>
                <Box maxWidth="lg">
                    <Typography align='center' variant={isBreakPoint ? "h5" : "h3"}>Open a new account with us today</Typography>
                </Box>
                <Box minWidth="100%" display="flex" justifyContent="center" mt="5vh">
                    <Button style={{ padding: "20px", color: "white", backgroundColor: "#662d91", borderRadius: "30px" }}
                        component={Link} to="#" endIcon={<ArrowRightAltIcon />}>GET STARTED</Button>
                </Box>
            </Box>
            {/*first box wrapper completed for one banckground colo that why i will make second box wrapper for second color */}
            <Box minHeight={isBreakPoint ? "120vh" : "85vh"} bgcolor="#F5F4CB" color="#662d91" position="relative">
                <BoxesDesign />
                <Box position="absolute" minWidth="100%" minHeight="75%" top="20%">
                    <Box maxWidth="lg">
                        <Typography align='center' variant={isBreakPoint ? "h4" : "h2"}>FINTEON HOME LOANS</Typography>
                    </Box>

                    <Grid container >
                        <Grid item xs={12} sm={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
                            <Box mt={6} ml={isBreakPoint ? "5%" : "35%"}>
                                <img style={{ height: "100px", marginLeft: "20%" }} src='https://i0.wp.com/finteon.com/wp-content/uploads/2022/06/Owner-Occupied-2.png?w=1004&ssl=1' alt='simple logo' />
                                <Typography align='cenetr' variant='h4'>Principal & Interest</Typography>
                                <Typography align='center' variant='h6'>Fixed for 3 years</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
                            <Box mt={6} mr={isBreakPoint ? "-5%" : "35%"}>
                                <img style={{ height: "100px", marginLeft: "5%" }} src='https://i0.wp.com/finteon.com/wp-content/uploads/2022/06/Owner-Occupied-1.png?w=1004&ssl=1' alt='simple logo' />
                                <Typography align='cenetr' variant='h4'>Interest Only</Typography>
                                <Typography align='center' variant='h6'>Variable Rate</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box width="xl" display="flex" justifyContent="center" mt={6}>
                        <Button component={Link} to="/register" style={{ padding: "15px 50px", fontSize: "20px", borderRadius: "35px", backgroundColor: "#662d91", color: "white" }} variant='contained'>APPLY</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Grid container >
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <Box mt={3} overflow="hidden" display="flex" justifyContent="center">
                            <img height={isBreakPoint ? "400px" : "600px"} width={isBreakPoint ? "350px" : "700px"} src='https://i0.wp.com/finteon.com/wp-content/uploads/2022/06/e861cb95-windows-n1yoswrxqje-unsplash-1.png?w=860&ssl=1' alt='simple-pic' />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <Box bgcolor={"green"} mt={3} display="flex" justifyContent="center">
                            <Paper style={{  padding: "10px", boxShadow:"none" , boxSizing: "border-box" }}>
                                <Box mb={3}>
                                    <Typography variant='h2'>Eligibility Criteria</Typography>
                                </Box>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </Typography>
                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>You Must Be A Salaried Employee </Typography>
                                </Box>
                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>You Must Be A Salaried Employee </Typography>
                                </Box>
                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>You Must Be A Salaried Employee </Typography>
                                </Box>

                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>You Must Be A Salaried Employee </Typography>
                                </Box>

                                <Box mt={5} mb={9}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>You Must Be A Salaried Employee </Typography>
                                </Box>

                            </Paper>
                        </Box>
                    </Grid>



                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <Box bgcolor={"green"} mt={3} display="flex" justifyContent="center">
                            <Paper style={{  paddingLeft:(isBreakPoint) ? "1px":"70px" , boxShadow:"none" , padding: "10px", boxSizing: "border-box" }}>
                                <Box mb={3}>
                                    <Typography variant='h2'>Documents Required</Typography>
                                </Box>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </Typography>
                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>ID Card </Typography>
                                </Box>
                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'> PAN Card </Typography>
                                </Box>
                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>4 Cheques From Your Salary Account</Typography>
                                </Box>

                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>Current Address Proof </Typography>
                                </Box>

                                <Box mt={5}>
                                    <span style={{ float: "left", marginRight: "15px" }}> <Avatar style={{backgroundColor:"#e5c024f0"}}><CheckIcon /></Avatar></span>
                                    <Typography variant='h6'>Permanent Address Proof (In Case The Permanent Address Is Different
                                        From The Address On Aadhaar Card </Typography>
                                </Box>

                            </Paper>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <Box mt={3} display="flex" justifyContent="center">
                            <img height={isBreakPoint ? "400px" : "600px"} width={isBreakPoint ? "350px" : "700px"} src='https://i0.wp.com/finteon.com/wp-content/uploads/2022/06/839fd0cf-stil-flrm0z3meoa-unsplash-1.png?w=860&ssl=1' alt='simple-pic' />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}