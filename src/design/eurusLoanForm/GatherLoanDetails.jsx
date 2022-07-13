import { Box, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core'
import React, {useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { setLoanDetailsFormData } from '../../reduxStore/AllFormData'

export const GatherLoanDetails = (props) => {
    const dispatch = useDispatch();
    const loanDetailsFormData = useSelector(state => state.AllFormData.loanDetailsFormData);
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    const onchange = (event) => {
        let { name, value } = event.target;
        if (name === "deposit") {
            value = event.target.checked;
        }
       dispatch( setLoanDetailsFormData({ ...loanDetailsFormData, [name]: value })) ;
    }
    useEffect(() => {
        props.confirmingForm(loanDetailsFormData, 3);
    }, [loanDetailsFormData])
    return (
        <Box width="100%" height="100%">
            <Box width="90%" m="0px auto" height="80%" padding="8% 5%">
                <Grid container spacing={isBreakPoint ? 2 : 5}>
                    <Grid item xs={12}>
                        <TextField value={loanDetailsFormData.ammount} label="Ammount Borrowed" name="ammount" onChange={onchange} variant='outlined' fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={loanDetailsFormData.term} label="Term" variant='outlined' name="term" onChange={onchange} fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox checked={loanDetailsFormData.deposit===true} name="deposit" onChange={onchange} />} label="Deposit" />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}
