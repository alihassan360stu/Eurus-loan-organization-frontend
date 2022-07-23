import { Box, Grid, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFamilyMemberForm } from '../../reduxStore/AllFormData';

export const FamilyMembers = (props) => {
    const dispatch = useDispatch();
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint);
    const familyMemberForm = useSelector((state) => { return state.AllFormData.familyMemberForm })
    let familayMambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const onchange = (event) => {
        const { name, value } = event.target;
        dispatch(setFamilyMemberForm({ ...familyMemberForm, [name]: value }));
    }

    useEffect(() => {
        props.confirmingForm(familyMemberForm, 5);
      }, [familyMemberForm])

    return (

        <Box m="0px auto" width={isBreakPoint.sx ? "100%" : "90%"} height="80%" padding="0px 5%">
            <Grid container spacing={isBreakPoint.sx ? 2 : 5}>
                <Grid item xs={12}>

                    <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "100%" : isBreakPoint.sm ? "100%" : "70"}>
                        <Typography variant='h6' style={{ marginBottom: "2vh" }}>
                            Number of Family members
                        </Typography>

                        <Box display="flex" maxWidth="100%">
                            {
                                familayMambers.map((data) => {
                                    return (
                                        <MenuItem
                                            onClick={() => { onchange({ target: { name: "familyMembers", value: data } }) }}
                                            selected={familyMemberForm.familyMembers===data}
                                            style={{
                                                width: "10%", margin: "0px .2%", border: 'solid 1px black',
                                                padding: isBreakPoint.xs ? "2.5% 2%" : isBreakPoint.sm ? "2.5% 3%" : "2.5vh 4%"
                                            }}
                                            key={data}>{data}</MenuItem>
                                    )
                                })
                            }
                        </Box>

                    </Box>

                </Grid>

                <Grid item xs={12}>

                    <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "100%" : isBreakPoint.sm ? "100%" : "70"}>
                        <Typography variant='h6' style={{ marginBottom: "2vh" }}>
                            Number of dependents
                        </Typography>

                        <Box display="flex" maxWidth="100%">
                            {
                                familayMambers.map((data) => {
                                    return (
                                        <MenuItem
                                            onClick={() => { onchange({ target: { name: "dependNumbers", value: data } }) }}
                                            selected={familyMemberForm.dependNumbers===data}
                                            style={{
                                                width: "10%", margin: "0px .2%", border: 'solid 1px black',
                                                padding: isBreakPoint.xs ? "2.5% 2%" : isBreakPoint.sm ? "2.5% 3%" : "2.5vh 4%"
                                            }} key={data} value={data}>{data}</MenuItem>
                                    )
                                })
                            }
                        </Box>

                    </Box>

                </Grid>

                <Grid item xs={12}>

                    <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "100%" : isBreakPoint.sm ? "100%" : "70"}>
                        <Typography variant='h6' style={{ marginBottom: "2vh" }}>
                            Number of children
                        </Typography>

                        <Box display="flex" maxWidth="100%">
                            {
                                familayMambers.map((data) => {
                                    return (
                                        <MenuItem
                                            onClick={() => { onchange({ target: { name:"childerNumbers", value: data } }) }}
                                            selected={familyMemberForm.childerNumbers===data}
                                            style={{
                                                width: "10%", margin: "0px .2%", border: 'solid 1px black',
                                                padding: isBreakPoint.xs ? "2.5% 2%" : isBreakPoint.sm ? "2.5% 3%" : "2.5vh 4%"
                                            }} key={data}>{data}</MenuItem>
                                    )
                                })
                            }
                        </Box>

                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}
