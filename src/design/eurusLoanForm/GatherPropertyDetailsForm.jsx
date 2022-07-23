import { Box, MenuItem, TextField, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPropertyDetailsFormData } from '../../reduxStore/AllFormData'

export const GatherPropertyDetailsForm = (props) => {
  const dispatch = useDispatch();
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
  const propertyDetailsFormData = useSelector(state => state.AllFormData.propertyDetailsFormData);
  const onchange = (event) => {
    const { name, value } = event.target;
    dispatch(setPropertyDetailsFormData({ ...propertyDetailsFormData, [name]: value }));
  }
  useEffect(()=>{window.scrollTo(0,0);},[])
  useEffect(() => {
    props.confirmingForm(propertyDetailsFormData, 2);
  }, [propertyDetailsFormData])

  return (

    <Box m="0px auto" width={isBreakPoint ? "100%" : "90%"} height="80%" padding="0px 5%">
      <Grid container spacing={isBreakPoint.sm ? 2 : 5}>

        <Grid item xs={12}>
          <Box m="0px auto" maxWidth={isBreakPoint.xs ? "70%" : "60%"}>
            <TextField value={propertyDetailsFormData.postcode} name="postcode" onChange={onchange} variant="outlined" label="PostCode" fullWidth />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box m="0px auto" maxWidth={isBreakPoint.xs ? "70%" : "60%"}>
            <TextField value={propertyDetailsFormData.value} label="Value" name="value" onChange={onchange} variant="outlined" fullWidth />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box m="0px auto" maxWidth={isBreakPoint.xs ? "70%" : "60%"}>
            <TextField name="property" value={propertyDetailsFormData.property} onChange={onchange} label="Property Type" variant="outlined" select fullWidth >
              <MenuItem value="Residential">Residential</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
            </TextField>
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}
