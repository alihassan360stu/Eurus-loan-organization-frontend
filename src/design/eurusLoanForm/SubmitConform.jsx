import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
import CloseIcon from '@material-ui/icons/Close';
import { Routes, Route ,Link} from "react-router-dom";


import { FrontPage } from '../frontPageDesign/FrontPage';
import { useState } from 'react';



export const SubmitConform = (props) => {
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    const formSubmit = useSelector(state => state.AllFormData.formConfirming)
    const responsiveContainer = useSelector(state => state.ReduxSlice.responsiveContainer)
    const personalDetailsFormData = useSelector(state => state.AllFormData.personalDetailsFormData)
    const loan = useSelector(state => state.AllFormData.loanDetailsFormData)
    const address = useSelector(state => state.AllFormData.addressForm)

    const [don , setDon]= useState(false)

    // let history = useHistory();

    // function handleClick() {
    //   history.push("/home");
    // }

    return ( <Box m="0px auto" width={isBreakPoint.sx ? "100%" : "90%"} padding="0px 5%">
            {(!formSubmit) ? <>
                <Typography style={{ maxWidth: responsiveContainer }} variant={isBreakPoint.xs ? "h6" : isBreakPoint.sm ? "h5" : "h4"} align="center">
                    Before submit Check Personal Details
                </Typography>
                <Box maxWidth={responsiveContainer} display="flex" mt="5%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >First Name</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{personalDetailsFormData.fname}</Typography>
                </Box>
                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >Last Name</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{personalDetailsFormData.lname}</Typography>
                </Box>

                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }} >Ammount Borrowed</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{loan.ammount}</Typography>
                </Box>

                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >Loan Type</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{loan.lounTime}</Typography>
                </Box>
                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >State</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{address.state}</Typography>
                </Box>

                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >City</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{address.city}</Typography>
                </Box>



                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >Email</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{personalDetailsFormData.email}</Typography>
                </Box>

                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >Phone Number</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{personalDetailsFormData.contact}</Typography>
                </Box>

                <Box maxWidth={responsiveContainer} display="flex" mt="2%">
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} style={{ width: isBreakPoint.xs ? "45%" : "35%" }}  >Date Of Birth</Typography>
                    <Typography variant={isBreakPoint.xs ? "h8" : "h6"} >{personalDetailsFormData.date}</Typography>
                </Box>
                <Box mb="5%" mt="5%">
                    <ReCAPTCHA
                        sitekey="Your client site key"
                    />
                </Box>
            </> :
                <Box maxWidth={responsiveContainer} position="relative">
                    <Link to="/" style={{ position: "absolute", right: "-8%", top: "5%", cursor: "pointer" }}>
                        <CloseIcon onclick={()=>{setDon(true)}} style={{ color: "red", fontSize: "3em" }} /></Link>
                    <Box height={isBreakPoint.xs ? "40vh" : "50vh"} display="flex" alignItems="center" justifyContent="center">

                        <Typography style={{ maxWidth: responsiveContainer }} variant={isBreakPoint.xs ? "h6" : isBreakPoint.sm ? "h5" : "h4"} align="center">
                            Form submitted successfuly
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    )
}
