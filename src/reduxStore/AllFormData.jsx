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
        deposit: ""

    },
    personalDetailsFormData: {
        fname: "",
        lname: "",
        contact: "",
        email: "",
        state: "",
        date: ""
    },
    errorChecking: [0, 0, 0, 0,0],
    formConfirming: "",
    formFinistConfirm: [0, 0, 0, 0,0],
    step: 1
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
            state.loanDetailsFormData = action.payload;

        }, // getting loan details

        setPersonalDetailsFormData: (state, action) => {
            state.personalDetailsFormData = action.payload;
        },// getting personal details
        setFormConfirming: (state, action) => {
            if (action.payload !== "cancel") {
                state.formConfirming = action.payload;
            }
            else{
                state.propertyDetailsFormData={ postcode: "", value: "", property: ""};
                state.preQualificationFormData={ age: false,PAYG: false, citizen: ""};
                state.loanDetailsFormData={ammount: "", deposit: ""};
                state.personalDetailsFormData={    fname: "", lname: "",contact: "",email: "",state: "",date: ""};
                state.errorChecking=[0, 0, 0, 0, 0];
                state.formConfirming= "";
                state.formFinistConfirm= [0, 0, 0, 0, 0];
                state.step=1;
            }
        },
        setFormFinistConfirm: (state, action) => {
            state.formFinistConfirm = action.payload[0];
            state.step = action.payload[1];
            state.errorChecking = action.payload[2];
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setPropertyDetailsFormData,
    setPreQualificationFormData,
    setLoanDetailsFormData,
    setPersonalDetailsFormData,
    setFormConfirming,
    setFormFinistConfirm
} = AllFormData.actions

export default AllFormData.reducer