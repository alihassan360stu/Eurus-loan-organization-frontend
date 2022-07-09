import React, { useState } from 'react'
import {
    Grid,
    Container,
    TextField,
    Select,
    MenuItem,
} from "@material-ui/core";
const register_form = { padding: "20px", backgroundColor: "white" }

const AccountRegister = () => {
    const [getSalecterValue, setGetSalecterValue] = useState({
        legalForm: " ",
        gender: " ",
        clientType: " ",
        clientClassification: " ",
    });

    const getSalecterValueEvent = (e) => {

        console.log(e.target.name);
        console.log(e.target.value);
    }
    return (
        <Container style={{ margin: "20vh auto" }}>
            <form style={register_form}>
                <Grid container spacing={3}>
                    
                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <Select value={getSalecterValue.legalForm} required fullWidth variant="outlined"
                            name='legalForm' onChange={getSalecterValueEvent}>
                            <MenuItem disabled required value=" ">Legal Form</MenuItem>
                            <MenuItem value={1}>form 1</MenuItem>
                            <MenuItem value={2}>form 2</MenuItem>
                            <MenuItem value={3}>form 3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <TextField required fullWidth variant="filled" label="first name" />
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <TextField fullWidth variant="filled" label="Middle name" />
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <TextField required fullWidth variant="filled" label="Last name" />
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <TextField type="number" fullWidth variant="filled" label="Mobile No" />
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <label style={{ lineHeight: "7vh" }}>
                            Date Of Birth
                        </label>
                        <TextField style={{ marginLeft: "30px", width: "20vw" }} type="date" variant='outlined' />
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <Select value={getSalecterValue.gender} required fullWidth variant="outlined"
                            name='gender' onChange={getSalecterValueEvent}>
                            <MenuItem disabled required value=" ">Gender</MenuItem>
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>female</MenuItem>
                            <MenuItem value={3}>other</MenuItem>
                        </Select>
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <Select value={getSalecterValue.clientType} required fullWidth variant="outlined"
                            name='clientType' onChange={getSalecterValueEvent}>
                            <MenuItem disabled required value=" ">Client Type</MenuItem>
                            <MenuItem value={1}>Checking 1</MenuItem>
                            <MenuItem value={2}>Checking 2</MenuItem>
                            <MenuItem value={3}>Checking 3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <Select value={getSalecterValue.clientClassification} required fullWidth variant="outlined"
                            name='clientClassification' onChange={getSalecterValueEvent}>
                            <MenuItem disabled required value=" ">Client Classification</MenuItem>
                            <MenuItem value={1}>Checking 1</MenuItem>
                            <MenuItem value={2}>Checking 2</MenuItem>
                            <MenuItem value={3}>Checking 3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid lg={6} md={6} xl={6} xs={12} sm={6} item>
                        <label style={{ lineHeight: "7vh" }}>
                            Submitted on
                        </label>
                        <TextField required style={{ marginLeft: "30px", width: "20vw" }} type="date" variant='outlined' />
                    </Grid>

                </Grid>
            </form>
        </Container>

    )
}

export default AccountRegister;