import { Box, Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFormConfirming } from '../../reduxStore/AllFormData'


export const SubmitConform = (props) => {
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    const dispatch = useDispatch();
    return (


        <Box maxWidth="50%" minHeight="30vh" mt="8%" display="flex" flexDirection="column" justifyContent="center" alignItems="center"
            width={isBreakPoint ? "100%" : "50%"} margin="2% auto" boxShadow={1} height={isBreakPoint ? "50%" : "70%"} component={Paper}>
            <Box mt="5%" height="70%" display="flex" alignItems="flex-end">
                <Typography>
                    Do You Want To Submit Form
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="end" height="30%" width="100%" mt="4%">
                <Button onClick={() => { dispatch(setFormConfirming(true)); props.confirmingForm(5); }}
                    style={{ backgroundColor: "green", marginTop: "4%", marginRight: "1%" }}>Submit</Button>
                <Button onClick={() => { dispatch(setFormConfirming("cancel")); props.confirmingForm(5); }}
                    style={{ backgroundColor: "red", marginTop: "4%", marginRight: "5%" }}>Cancal</Button>
            </Box>
        </Box>

    )
}
