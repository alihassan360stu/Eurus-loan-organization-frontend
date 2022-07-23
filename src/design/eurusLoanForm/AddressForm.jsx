import { Box, Grid, MenuItem, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { Country } from 'country-state-city';
import { setAddressForm } from '../../reduxStore/AllFormData';

export const AddressForm = (props) => {
    const dispatch = useDispatch();
    const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint);
    const addressForm = useSelector((state) => { return state.AllFormData.addressForm })

    const onchange = (event) => {
        const { name, value } = event.target;
        dispatch(setAddressForm({ ...addressForm, [name]: value }));
      }

      useEffect(()=>{window.scrollTo(0,0);},[])
      useEffect(() => {
        props.confirmingForm(addressForm, 6);
      }, [addressForm])

    return (

        <Box m="0px auto" width={isBreakPoint.sx ? "100%" : "90%"} height="80%" padding="0px 5%">
            <Grid container spacing={isBreakPoint.sx ? 2 : 5}>
                <Grid item xs={12}>
                    <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
                        <TextField  onChange={onchange} label="Address Line 1" name="address1" variant='outlined' value={addressForm.address1} fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
                        <TextField onChange={onchange} label="Address Line 2" name="address2" value={addressForm.address2} variant='outlined' fullWidth />
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
                        <TextField onChange={onchange} label="City" name="city" variant='outlined' value={addressForm.city} fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={12}>

                    <Box pl="2%" pr="2%" m="0px auto" maxWidth={isBreakPoint.xs ? "90%" : "70%"}>
                        <TextField select name="state" onChange={onchange} label="State" variant='outlined' fullWidth value={addressForm.state} >
                            {

                                Country.getAllCountries().map((data, index) => {
                                  
                                    return (
                                        <MenuItem value={data.name} key={index}>{data.name}</MenuItem>
                                    )
                                })
                            }
                        </TextField>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}
