import { Box, Grid, MenuItem, Slider, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLoanDetailsFormData } from '../../reduxStore/AllFormData'
const lounTime = ["1 Year", "2 Year", "3 Year", "4 Year", "5 Year"]

export const GatherLoanDetails = (props) => {

    const dispatch = useDispatch();
    const loanDetailsFormData = useSelector(state => state.AllFormData.loanDetailsFormData);
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    const onchange = (event, data) => {
        let { name, value } = event.target;
        if (name === undefined) {
            name = "ammount"
            value = data;
        }
        dispatch(setLoanDetailsFormData({ ...loanDetailsFormData, [name]: value }));
    }
    useEffect(() => {
        props.confirmingForm(loanDetailsFormData, 3);
    }, [loanDetailsFormData])

    return (

        <Box width="90%" m="0px auto" height="80%" padding="0px 5%">

            <Grid container spacing={isBreakPoint.sm ? 2 : 5}>
                <Grid item xs={12}>

                    <Box width="100%" display="flex" justifyContent="center">
                        <TextField type="number" value={loanDetailsFormData.ammount} label="Ammount Borrowed" name="ammount"
                            onChange={onchange} fullWidth style={{ marginBottom: "1.5vh", width: "50%" }} />
                    </Box>

                    <Box width="100%" display="flex" justifyContent="center">
                        <Slider
                            style={{ width: "50%" }}
                            name="ammount"
                            size="small"
                            value={loanDetailsFormData.ammount}
                            defaultValue={10000}
                            onChange={onchange}
                            step={10000}
                            min={10000}
                            max={5000000}
                        />
                    </Box>
                </Grid>


                <Grid item xs={12}>
                    <Typography variant={isBreakPoint.sm ? "h6" : "h4"} align='center'>
                        When would you like to pay off this loan?
                    </Typography>
                    {
                        lounTime.map((data, index) => {

                            return (
                                <MenuItem key={index} selected={loanDetailsFormData.lounTime === data} style={{
                                    margin: "2vh auto", justifyContent: "center",
                                    width: isBreakPoint.sm ? "70%" : "50%", border:loanDetailsFormData.lounTime === data? "solid 2px green":"solid .2px black",
                                    borderRadius: "5px"
                                }} onClick={() => { onchange({ target: { name: "lounTime", value: data } }) }}> {data}</MenuItem>
                            )

                        })
                    }

                </Grid>
            </Grid>
        </Box>
    )
}
