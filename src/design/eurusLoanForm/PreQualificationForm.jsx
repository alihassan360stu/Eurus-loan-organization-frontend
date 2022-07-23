import React, { useEffect } from 'react'
import { Box, Typography, Radio, Checkbox, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setPreQualificationFormData } from '../../reduxStore/AllFormData'

export const PreQualificationForm = (props) => {
    const dispatch = useDispatch();
    const preQualificationFormData = useSelector(state => state.AllFormData.preQualificationFormData)
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
    const onchange = (event) => {
        var { name, checked } = event.target;
        dispatch(setPreQualificationFormData({ ...preQualificationFormData, [name]: checked }))
    }
    useEffect(() => {
        props.confirmingForm(preQualificationFormData, 1);
    }, [preQualificationFormData])

    return (
        <Grid container spacing={5}>
            <Grid style={{ height: "100%" }} item xs={12}>
                <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "70%" :"60%"}
                    height="16%" borderRadius={5} border={1} display="flex" alignItems="center">
                    <Typography style={{ flexGrow: 1 }} variant='body1'>Age Under 18 </Typography>
                    <Checkbox style={{ color: "#8cc63f" }} checked={preQualificationFormData.age === true} name="age" onChange={onchange} />
                </Box>

            </Grid>

            <Grid style={{ width: "100%", height: "100%" }} item xs={12}>
                <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "70%" : "60%"}
                    height="16%" borderRadius={5} border={1} display="flex" alignItems="center">
                    <Typography style={{ flexGrow: 1 }} variant='body1'>Currently Under A PAYG </Typography>
                    <Checkbox style={{ color: "#8cc63f" }} checked={preQualificationFormData.PAYG === true} name="PAYG" onChange={onchange} />
                </Box>

            </Grid>

            <Grid style={{ width: "100%", height: "100%" }} item xs={12}>
                <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "70%" :"60%"}
                    height="16%" borderRadius={5} border={1} display="flex" alignItems="center">
                    <Typography style={{ flexGrow: 1 }} variant='body1'>Aus Citizen or Perm res? </Typography>
                    <Checkbox style={{ color: "#8cc63f" }} checked={preQualificationFormData.citizen === true} name="citizen" onChange={onchange} />
                </Box>

            </Grid>
        </Grid>
    )
}
