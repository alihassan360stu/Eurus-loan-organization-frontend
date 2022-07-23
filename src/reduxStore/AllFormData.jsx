import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    preQualificationFormData: {
        age: false,
        PAYG: false,
        citizen: false
    },
    propertyDetailsFormData: {
        postcode: "",
        value: "",
        property: ""
    },
    loanDetailsFormData: {
        ammount: "",
        lounTime: ""

    },
    personalDetailsFormData: {
        fname: "",
        lname: "",
        email: "",
        sNumber: "",
        contact: "",
        date: ""
    },
    familyMemberForm: {
        familyMembers: "",
        dependNumbers: "",
        childerNumbers: ""
    },
    addressForm: {
        address1: "",
        address2: "",
        city:"",
        state:""
    },
    formConfirming: "",
    formFinistConfirm: [0, 0, 0, 0, 0, 0, 0],
    step:1,
    captcha:false
}
export const AllFormData = createSlice({
    name: 'responsive',
    initialState,

    reducers: {

        setPreQualificationFormData: (state, action) => {
            state.preQualificationFormData = action.payload;
        }, // getting prequalification details

        setPropertyDetailsFormData: (state, action) => {

            state.propertyDetailsFormData = action.payload;
        }, // getting property details 

        setLoanDetailsFormData: (state, action) => {
            state.loanDetailsFormData = action.payload;
        }, // getting loan details

        setPersonalDetailsFormData: (state, action) => {
            state.personalDetailsFormData = action.payload;
        },// getting personal details

        setFamilyMemberForm: (state, action) => {
            state.familyMemberForm = action.payload;
        },
        setAddressForm: (state, action) => {
            state.addressForm = action.payload
        },
        setFormConfirming: (state, action) => {
            
            if (action.payload !== "cancel") {
                state.formConfirming = action.payload;
            }
            else {

                state.propertyDetailsFormData = { postcode: "", value: "", property: "" };
                state.preQualificationFormData = { age: false, PAYG: false, citizen: false };
                state.loanDetailsFormData = { ammount: "", lounTime: "" };
                state.personalDetailsFormData = { fname: "", lname: "", contact: "", email: "", sNumber: "", date: "" };
                state.familyMemberForm={familyMembers:"",dependNumbers:"",childerNumbers:""};
                state.addressForm={address1:"",address2:"",city:"",state:""}
                state.formConfirming = "";
                state.formFinistConfirm = [0, 0, 0, 0, 0,0,0];
                state.step = 1;
                state.captcha=false
            }
        },
        setFormFinistConfirm: (state, action) => {
            state.formFinistConfirm = action.payload[0];
            state.step = action.payload[1];
            console.log(state.formFinistConfirm);
        },
        setCaptcha:(state,action)=>{
            state.captcha=action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setPropertyDetailsFormData,
    setPreQualificationFormData,
    setLoanDetailsFormData,
    setPersonalDetailsFormData,
    setFamilyMemberForm,
    setAddressForm,
    setFormConfirming,
    setFormFinistConfirm,
    setCaptcha
} = AllFormData.actions

export default AllFormData.reducer