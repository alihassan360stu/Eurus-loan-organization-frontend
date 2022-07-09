import { Box, MenuItem, TextField, Grid} from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

export const GatherPropertyDetailsForm = () => {
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
  return (

    <Box width="100%" height="100%">
      <Box m="0px auto" width={isBreakPoint ? "100%" : "90%"} height="80%" padding="8% 5%">
        <Grid container spacing={isBreakPoint ? 2 : 5}>
          <Grid item xs={12}>
            <TextField variant="outlined" label="PostCode" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Value" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Select" variant="outlined" select fullWidth >
              <MenuItem>Residential</MenuItem>
              <MenuItem>Commercial</MenuItem>
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
