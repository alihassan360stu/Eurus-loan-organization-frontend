import { Box, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLoanDetailsFormData } from '../../reduxStore/AllFormData'

export const GatherLoanDetails = (props) => {
    const dispatch = useDispatch();
    const loanDetailsFormData = useSelector(state => state.AllFormData.loanDetailsFormData);
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    const onchange = (event) => {
        let { name, value } = event.target;
        dispatch(setLoanDetailsFormData({ ...loanDetailsFormData, [name]: value }));
    }
    useEffect(() => {
        props.confirmingForm(loanDetailsFormData, 3);
    }, [loanDetailsFormData])
    return (
       
            <Box width="90%" m="0px auto" height="80%" padding="0px 5%">
                <Grid container spacing={isBreakPoint ? 2 : 5}>
                    <Grid item xs={12}>
                        <TextField value={loanDetailsFormData.ammount} label="Ammount Borrowed" name="ammount" onChange={onchange} variant='outlined' fullWidth />
                    </Grid>

                    <Grid item xs={12}>

                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup >
                            <FormControlLabel onChange={onchange} name="deposit" value="term" control={<Radio style={{ color: "#8cc63f" }} />} label="Term" />
                            <FormControlLabel onChange={onchange} name="deposit" value="Deposit" control={<Radio style={{ color: "#8cc63f" }} />} label="Deposit" />
                        </RadioGroup>
                    </Grid>
                </Grid>
            </Box>
        
    )
}
