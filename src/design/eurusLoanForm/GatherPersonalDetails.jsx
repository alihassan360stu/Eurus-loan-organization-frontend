import { Box, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPersonalDetailsFormData } from '../../reduxStore/AllFormData';

export const GatherPersonalDetails = (props) => {
  var days = [31];
  for (let i = 0; i < 31; i++) { days[i] = i + 1 }
  let familayMambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  
  const dispatch = useDispatch();
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint);
  const personalDetailsFormData = useSelector((state) => { return state.AllFormData.personalDetailsFormData })

  const onchange = (event) => {
    const { name, value } = event.target;
    dispatch(setPersonalDetailsFormData({ ...personalDetailsFormData, [name]: value }));
  }

  useEffect(() => {
    props.confirmingForm(personalDetailsFormData, 4);
  }, [personalDetailsFormData])

  return (
    <Box m="0px auto" width={isBreakPoint.sx ? "100%" : "90%"} height="80%" padding="0px 5%">
      <Grid container spacing={isBreakPoint.sx ? 2 : 5}>
        <Grid item xs={12}>
          <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
            <TextField label="First Name" value={personalDetailsFormData.fname} name="fname" onChange={onchange} variant='outlined' fullWidth />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
            <TextField label="Last Name" value={personalDetailsFormData.lname} name="lname" onChange={onchange} variant='outlined' fullWidth />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
            <TextField type="email" label="Email" value={personalDetailsFormData.email} name="email" onChange={onchange} variant='outlined' fullWidth />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
            <TextField type="number" label="Social Number" value={personalDetailsFormData.sNumber} name="sNumber" onChange={onchange} variant='outlined' fullWidth />
          </Box>
        </Grid>



        <Grid item xs={12}>
          <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
            <TextField type="number" label="Phone Number" value={personalDetailsFormData.contact} name="contact" onChange={onchange} variant='outlined' fullWidth />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"} display="flex" justifyContent="cenetr" alignItems="center">
            <Typography>
              Date Of Birth
            </Typography>
            <TextField type="date" style={{ maxWidth: "70%", marginLeft: "10%" }} value={personalDetailsFormData.date}
              name="date" onChange={onchange} variant='outlined' fullWidth />
          </Box>
        </Grid>
      </Grid>
    </Box>

  )
}
