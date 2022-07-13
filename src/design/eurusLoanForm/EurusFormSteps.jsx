import { Box, Avatar, Button, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import { PreQualificationForm } from './PreQualificationForm';
import { GatherPropertyDetailsForm } from './GatherPropertyDetailsForm';
import { GatherLoanDetails } from './GatherLoanDetails';
import { GatherPersonalDetails } from './GatherPersonalDetails';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
const EurusFormSteps = () => {
  var formName = ["Pre Qualifitions", "Property Details", "Loan Details", "Personal Details"]

  const [step, setStep] = useState(1);
  const [formFinishConfirming, setFormFinishConfirming] = useState([0, 0, 0, 0]);
  const [formSelectionPlusFormData, setFormSelectionPlusFormData] = useState(0);
  const formStepIncreaseAndDecrease = () => {
    if (step < 4) { setStep(step + 1) }
    setFormFinishConfirming((data) => {
      let copyArrayData = [data.length];
      for (let i = 0; i < data.length; i++) {
        if (step === i + 1) {
          copyArrayData[i] = step;
        }
        else {
          copyArrayData[i] = data[i];
        }
      }
      return copyArrayData
    })
  }

  const submitEurusForm = () => {


    for (const variable in formSelectionPlusFormData.data) {
      if (!formSelectionPlusFormData.data[variable]) {
        alert("please fill complete form")
        return 0;
      }
    }


    if (formSelectionPlusFormData.select === 1) {
      formStepIncreaseAndDecrease()
    } // submit data of form no 1

    if (formSelectionPlusFormData.select === 2) {
      formStepIncreaseAndDecrease()
    }// submit data of form no 2

    if (formSelectionPlusFormData.select === 3) {
      formStepIncreaseAndDecrease()
    }// submit data of form no 3

    if (formSelectionPlusFormData.select === 4) {
      formStepIncreaseAndDecrease()
    }// submit data of form no 4

  }

  let formStepControlling = (a) => {
    setStep(a);
  }

  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
  const formButton = { borderRadius: "10px", backgroundColor: "#662d91", margin: "0px 4%", padding: "2%", height: isBreakPoint ? "25%" : "50%", fontSize: isBreakPoint ? "100%" : "200%" }

  const formRender = () => {
    switch (step) {
      case 1: return (<PreQualificationForm
        confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }) }} />);
      case 2: return (<GatherPropertyDetailsForm
        confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }) }} />);
      case 3: return (<GatherLoanDetails
        confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }) }} />);
      case 4: return (<GatherPersonalDetails
        confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }) }} />);
      default: return (null);
    }
  }

  return (
    <Box disableGutters maxWidth={"xl"} mt={.5} minHeight="90vh" bgcolor="rgb(215, 224, 225)" display="flex" justifyContent="center">
      <Box mt={5} minWidth={isBreakPoint ? "90%" : "70%"} minHeight="80%" bgcolor="#fafafa" boxShadow={3} borderRadius="10px">
        <Box width="100%" height="12%" display="flex" justifyContent="center" alignItems="center">
          {
            formName.map((val, index) => {
              return (
                <>

                  <Box ml={index === 0 ? (isBreakPoint) ? "13%" : "16%" : "0px"} display="flex" alignItems="center" width="100%" height="40%">
                    <Box component={Avatar} style={{ cursor: "pointer", backgroundColor: formFinishConfirming[index] === index + 1 ? "green" : "#662d91" }} width={isBreakPoint ? "30%" : "15%"}
                      height="100%" onClick={() => { formStepControlling(index + 1) }}>
                      {formFinishConfirming[index] === index + 1 ? <CheckIcon /> : index + 1}
                    </Box>
                    {
                      (index !== 3) && (<Box bgcolor={formFinishConfirming[index] === index + 1 ? "green" : "#662d91"} width="85%" height="10%">
                      </Box>)
                    }
                  </Box>
                </>

              )
            })
          }
        </Box>

        <Box ml="15%" width="80%" height={isBreakPoint ? "6%" : "2%"} display="flex" justifyContent="center" alignItems="center">
          {
            formName.map((val, index) => {
              return <>
                <Box display="flex" alignItems="center" width="100%" height="90%">
                  <Typography style={{
                    fontSize: isBreakPoint ? "80%" : null,
                    color: formFinishConfirming[index] === index + 1 ? "green" : "#662d91", fontWeight: "bold"
                  }}> {val} </Typography>
                </Box>
              </>
            })
          }
        </Box>

        <Box width="100%" height="85%" position="relative">
          {
            formRender()
          }

          <Box width="100%" height="25%" position="absolute" bottom="0%" display="flex" alignItems="center" justifyContent="center">
            <Button style={formButton} onClick={submitEurusForm}>submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>

  )
}

export default EurusFormSteps