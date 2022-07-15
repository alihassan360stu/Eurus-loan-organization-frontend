import { Box, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Country } from 'country-state-city';
import { setPersonalDetailsFormData } from '../../reduxStore/AllFormData';

export const GatherPersonalDetails = (props) => {
  const dispatch = useDispatch();
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint);
  const personalDetailsFormData = useSelector((state)=>{return state.AllFormData.personalDetailsFormData})
  const onchange = (event) => {
    const { name, value } = event.target;
    dispatch( setPersonalDetailsFormData({ ...personalDetailsFormData, [name]: value }));
  }

  useEffect(() => {
    props.confirmingForm(personalDetailsFormData, 4);
}, [personalDetailsFormData])

  return (
      <Box m="0px auto" width={isBreakPoint ? "100%" : "90%"} height="80%" padding="0px 5%">
        <Grid container spacing={isBreakPoint ? 2 : 5}>
          <Grid item xs={12} md={6}>
            <TextField label="First Name" value={personalDetailsFormData.fname} name="fname" onChange={onchange} variant='outlined' fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Last Name" value={personalDetailsFormData.lname} name="lname" onChange={onchange} variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField type="number" label="Contact" value={personalDetailsFormData.contact} name="contact" onChange={onchange} variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField select name="state" onChange={onchange} value={personalDetailsFormData.state} label="State" variant='outlined' fullWidth >
              {

                Country.getAllCountries().map((value, index) => {
                  return (
                    <MenuItem value={value.name} key={index}>{value.name}</MenuItem>
                  )
                })
              }
            </TextField>
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField type="email" label="Email" value={personalDetailsFormData.email} name="email" onChange={onchange} variant='outlined' fullWidth />
          </Grid>


          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center">
              <Typography style={{ marginRight: "6%" }}>Birth</Typography>
              <TextField name="date" value={personalDetailsFormData.date} onChange={onchange} type="date" variant='outlined' fullWidth />
            </Box>
          </Grid>
        </Grid>
      </Box>
  )
}
