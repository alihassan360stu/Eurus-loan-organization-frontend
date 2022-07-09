import React from 'react'
import { Box, Typography, Radio, Checkbox, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

export const PreQualificationForm = () => {
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    return (
        <Box width="100%" height="80%">
            <Box width="100%" height="80%"  display="flex" alignItems="center">

                <Grid container spacing={5}>
                    <Grid style={{width:"100%" , height:"100%"}} item xs={12}>
                        <Box pl="2%" pr="2%" m="0px auto" width="80%" height="16%" borderRadius={5} border={1} display="flex" alignItems="center">
                            <Typography style={{ flexGrow: 1 }} variant='h6'>Age Under 18 </Typography>
                            <Checkbox />
                        </Box>

                    </Grid>

                    <Grid  style={{width:"100%" , height:"100%"}} item xs={12}>
                        <Box pl="2%" pr="2%" m="0px auto" width="80%" height="16%" borderRadius={5} border={1} display="flex" alignItems="center">
                            <Typography style={{ flexGrow: 1 }} variant='h6'>Currently Under A PAYG </Typography>
                            <Checkbox />
                        </Box>

                    </Grid>

                    <Grid style={{width:"100%" , height:"100%"}} item xs={12}>
                        <Box pl="2%" pr="2%" m="0px auto" width="80%" height="16%" borderRadius={5} border={1} display="flex" alignItems="center">

                            <Typography style={{ flexGrow: 1 }} variant='h6'>Citizen</Typography>
                            <span ><Radio />AUSTRALIA</span>
                            <span style={{ marginLeft: "5%" }}><Radio />PERNRES</span>
                        </Box>

                    </Grid>

                </Grid>

            </Box>
        </Box>
    )
}
