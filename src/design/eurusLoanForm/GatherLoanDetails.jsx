import { Box, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
export const GatherLoanDetails = () => {
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    return (
        <Box width="100%" height="100%">
            <Box  width="90%" m="0px auto" height="80%" padding="8% 5%">
                <Grid container spacing={isBreakPoint ? 2 : 5}>
                    <Grid item xs={12}>
                        <TextField label="Ammount Borrowed" variant='outlined' fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField label="Term" variant='outlined' fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                    <FormControlLabel  control={<Checkbox defaultChecked />} label="Deposit" />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}
