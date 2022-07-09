import { Box, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Country } from 'country-state-city';

export const GatherPersonalDetails = () => {
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
  return (
    <Box width="100%" height="100%">
      <Box m="0px auto" width={isBreakPoint ? "100%" : "90%"} height="80%" padding="8% 5%">
        <Grid container spacing={isBreakPoint ? 2 : 5}>
          <Grid item xs={12} md={6}>
            <TextField label="First Name" variant='outlined' fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Last Name" variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField type="number" label="Contact" variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField select label="State" variant='outlined' fullWidth >
              {

                Country.getAllCountries().map((value, index) => {
                  return (
                    <MenuItem key={index}>{value.name}</MenuItem>
                  )
                })
              }
            </TextField>
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField type="email" label="Email" variant='outlined' fullWidth />
          </Grid>


          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center">
              <Typography style={{ marginRight: "6%" }}>Birth</Typography>
              <TextField type="date" variant='outlined' fullWidth />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
