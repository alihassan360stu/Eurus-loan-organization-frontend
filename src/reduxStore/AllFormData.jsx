import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    propertyDetailsFormData: {
        postcode: "",
        value: "",
        property: ""
    },

    preQualificationFormData: {
        age: false,
        PAYG: false,
        citizen: ""
    },

    loanDetailsFormData: {
        ammount: "",
        term: "",
        deposit: ""

    },
    personalDetailsFormData: {
        fname: "",
        lname: "",
        contact: "",
        email: "",
        state: "",
        date: ""
    }
}
export const AllFormData = createSlice({
    name: 'responsive',
    initialState,

    reducers: {
        setPropertyDetailsFormData: (state, action) => {

            state.propertyDetailsFormData = action.payload;
        }, // getting property details 

        setPreQualificationFormData: (state, action) => {
            state.preQualificationFormData = action.payload;
        }, // getting prequalification details

        setLoanDetailsFormData: (state, action) => {
            state.loanDetailsFormData= action .payload;

        }, // getting loan details

        setPersonalDetailsFormData: (state, action) => {
            state.personalDetailsFormData = action.payload;
        }// getting personal details
    },
})

// Action creators are generated for each case reducer function
export const {
    setPropertyDetailsFormData,
    setPreQualificationFormData,
    setLoanDetailsFormData,
    setPersonalDetailsFormData
} = AllFormData.actions

export default AllFormData.reducer