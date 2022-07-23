import { Box, Avatar, Button, Typography } from '@material-ui/core'
import { PreQualificationForm } from './PreQualificationForm';
import { GatherPropertyDetailsForm } from './GatherPropertyDetailsForm';
import { GatherLoanDetails } from './GatherLoanDetails';
import { GatherPersonalDetails } from './GatherPersonalDetails';
import { SubmitConform } from './SubmitConform';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFormConfirming } from '../../reduxStore/AllFormData';
import { setFormFinistConfirm } from '../../reduxStore/AllFormData';
import { FamilyMembers } from './FamilyMembers';
import { AddressForm } from './AddressForm';



const EurusFormSteps = () => {
  const dispatch = useDispatch();
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint)
  const responsiveContainer = useSelector(state => state.ReduxSlice.responsiveContainer)
  const formConfirming = useSelector(state => state.AllFormData.formConfirming)
  const formFinishConfirming = useSelector(state => state.AllFormData.formFinistConfirm)
  const step = useSelector(state => state.AllFormData.step)
  const formSubmit = useSelector(state => state.AllFormData.formConfirming)
  var formName = ["Pre Qualifitions", "Property Details", "Loan Details", "Personal Details", "Family Members", "Address Information", "Confirming  Details"]
  const [formSelectionPlusFormData, setFormSelectionPlusFormData] = useState(0);

  useEffect(() => {
    if (formConfirming) {

      for (let i = 0; i < formFinishConfirming.length; i++) {
        if (formFinishConfirming[i] === 0) {
          alert("please fill all form")
          dispatch(setFormConfirming(false))
          i = 10;
        }
      }

    }

  }, [formConfirming])

  useEffect(() => {

    let a = formFinishConfirming;
    if (a[0] !== 0 && a[1] !== 0 && a[2] !== 0 && a[3] !== 0 && a[4] !== 0 && a[5] !== 0) {
      dispatch(setFormFinistConfirm([[1, 2, 3, 4, 5, 6, 7], step]));
    }

  }, [step])

  const formStepIncreaseAndDecrease = () => {
    let array = [formFinishConfirming.length];
    for (let i = 0; i < formFinishConfirming.length; i++) {
      if (i + 1 === step) {
        array[i] = step;
      }
      else {
        array[i] = formFinishConfirming[i];
      }
    }
    var stepcount = step + 1;
    dispatch(setFormFinistConfirm([array, stepcount]));
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

    if (formSelectionPlusFormData.select === 5) {
      formStepIncreaseAndDecrease()
    }// submit data of form no 5

    if (formSelectionPlusFormData.select === 6) {
      formStepIncreaseAndDecrease()
    }// submit data of form no 6
  }
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
      case 5: return (<FamilyMembers
        confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }); console.log(select); }} />);
      case 6: return (<AddressForm
        confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }) }} />);
      case 7: return (<SubmitConform confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }) }} />);
      default: return (null);
    }
  }

  return (
    <Box  maxWidth={responsiveContainer} pt={isBreakPoint}>
      <Box boxShadow={2} bgcolor="#fafafa" maxWidth={isBreakPoint.xs ? "100%" : isBreakPoint.sm ? "90%" : isBreakPoint.md ? "80%" : "60%"}
        m={isBreakPoint.sm ? "0px 5%" : "0px auto"} mt={isBreakPoint.xs ? "15%" : isBreakPoint.sm ? "8%" : isBreakPoint.md ? "5%" : "4%"}>
        {
          (!formSubmit) && (<Box display="flex" width="85%" height="10vh" alignItems="center" margin="0px auto">

            {
              formName.map((value, index) => {
                return (
                  <Box position="relative" width={`${(100 / formName.length) - .4}%`}>
                    <Box height="1.5vh" bgcolor={formFinishConfirming[index] === index + 1 ? "green" : "#662d91"}  ></Box>
                    <Box position="absolute" left="10%" marginTop="5%">
                      {
                        (step === index + 1) &&
                        (<Typography style={{ color: formFinishConfirming[index] === index + 1 ? "green" : "#662d91" }} variant='h8'>{value}</Typography>)
                      }
                    </Box>
                  </Box>
                )
              })
            }

          </Box>)
        }
        {/*step icon and Text  setting and styling *****************************************************************************/}

        <Box width="100%" minHeight="85%" position="relative" mt="5%">
          {
            formRender()
          }
        </Box>

        {
          (!formSubmit) &&
          (<Box maxWidth="100%" display="flex" alignItems="center" justifyContent="center" mt="3%" mb="5%" pb="5%" pt="5%">
            <Button style={{ backgroundColor: "#662d91", color: "white", marginRight: "2%" }}

              onClick={step!==7 ? () => {
                if (step !== 1) {
                  var stepcount = step - 1;
                  dispatch(setFormFinistConfirm([formFinishConfirming, stepcount]));
                }

              }
                :
                () => {
                  dispatch(setFormConfirming("cancel"));
                }}>
              {step === 7 ? "Cancal" : "Back"}</Button>
            <Button style={{ backgroundColor: "#662d91", color: "white", marginLeft: "1%" }}
              onClick={step !== 7 ? submitEurusForm : () => {
                dispatch(setFormConfirming("submit"));
              }}>{step === 7 ? "Submit" : "Next"}</Button>
          </Box>)
        }


      </Box>
    </Box>

  )
}

export default EurusFormSteps