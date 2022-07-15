import React, { useEffect } from 'react'
import { Box, Typography, Radio, Checkbox, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setPreQualificationFormData } from '../../reduxStore/AllFormData'

export const PreQualificationForm = (props) => {
    const dispatch = useDispatch();
    const preQualificationFormData = useSelector(state => state.AllFormData.preQualificationFormData)
    const onchange = (event) => {
        var { name, checked } = event.target;
        if (name === "citizen") {
            checked = event.target.value;
        }
        dispatch(setPreQualificationFormData({ ...preQualificationFormData, [name]: checked }))
    }
    useEffect(() => {
        props.confirmingForm(preQualificationFormData, 1);
    }, [preQualificationFormData])

    return (
            <Grid container spacing={5}>
                <Grid style={{ width: "100%", height: "100%" }} item xs={12}>
                    <Box pl="2%" pr="2%" m="0px auto" width="80%" height="16%" borderRadius={5} border={1} display="flex" alignItems="center">
                        <Typography style={{ flexGrow: 1 }} variant='h6'>Age Under 18 </Typography>
                        <Checkbox style={{ color: "#8cc63f" }} checked={preQualificationFormData.age === true} name="age" onChange={onchange} />
                    </Box>

                </Grid>

                <Grid style={{ width: "100%", height: "100%" }} item xs={12}>
                    <Box pl="2%" pr="2%" m="0px auto" width="80%" height="16%" borderRadius={5} border={1} display="flex" alignItems="center">
                        <Typography style={{ flexGrow: 1 }} variant='h6'>Currently Under A PAYG </Typography>
                        <Checkbox style={{ color: "#8cc63f" }} checked={preQualificationFormData.PAYG === true} name="PAYG" onChange={onchange} />
                    </Box>

                </Grid>

                <Grid style={{ width: "100%", height: "100%" }} item xs={12}>
                    <Box pl="2%" pr="2%" m="0px auto" width="80%" height="16%" borderRadius={5} border={1} display="flex" alignItems="center">

                        <Typography style={{ flexGrow: 1 }} variant='h6'>Citizen</Typography>
                        <span ><Radio style={{ color: "#8cc63f" }} value="Australia" name="citizen" onChange={onchange} checked={preQualificationFormData.citizen === "Australia"} />Australia</span>
                        <span style={{ marginLeft: "5%" }}><Radio style={{ color: "#8cc63f" }} name="citizen" value="Perneres"
                            onChange={onchange} checked={preQualificationFormData.citizen === "Perneres"} />Perneres</span>
                    </Box>

                </Grid>

            </Grid>
    )
}
