import { Box, MenuItem, TextField, Grid } from '@material-ui/core'
import React, {useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { setPropertyDetailsFormData } from '../../reduxStore/AllFormData'

export const GatherPropertyDetailsForm = (props) => {
  const dispatch = useDispatch();
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
  const propertyDetailsFormData = useSelector(state => state.AllFormData.propertyDetailsFormData);
  const onchange = (event) => {
    const { name, value } = event.target;
     dispatch( setPropertyDetailsFormData({ ...propertyDetailsFormData, [name]: value }));
  }

  useEffect(() => {
    props.confirmingForm(propertyDetailsFormData, 2);
},[propertyDetailsFormData])

  return (

    <Box width="100%" height="100%">
      <Box m="0px auto" width={isBreakPoint ? "100%" : "90%"} height="80%" padding="8% 5%">
        <Grid container spacing={isBreakPoint ? 2 : 5}>
          <Grid item xs={12}>
            <TextField value={propertyDetailsFormData.postcode} name="postcode" onChange={onchange} variant="outlined" label="PostCode" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField value={propertyDetailsFormData.value} label="Value" name="value" onChange={onchange} variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField name="property" value={propertyDetailsFormData.property} onChange={onchange} label="Select" variant="outlined" select fullWidth >
              <MenuItem value="Residential">Residential</MenuItem>
              <MenuItem value="Commercial">Commercial</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Box>
    </Box>


    // <Box width="100%" height="80%">
    //   <Box m="0px auto" width={isBreakPoint ? "100%" : "60%"} padding={5} height="80%" display="flex" flexDirection="column" justifyContent="space-evenly" >
    //     <Box>
    //       <TextField variant="outlined" label="PostCode" fullWidth />
    //     </Box>
    //     <Box>
    //       <TextField label="Value" variant="outlined" fullWidth />
    //     </Box>
    //     <Box>
    //       <TextField label="Select" variant="outlined" select fullWidth >
    //         <MenuItem>Residential</MenuItem>
    //         <MenuItem>Commercial</MenuItem>
    //       </TextField>
    //     </Box>

    //   </Box>
    // </Box>
  )
}
