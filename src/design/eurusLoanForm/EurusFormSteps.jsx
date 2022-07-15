import { Box, Avatar, Button, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
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


const EurusFormSteps = () => {
  const dispatch = useDispatch();
  const isBreakPoint = useSelector(state => state.ReduxSlice.breakPoint.xs)
  const responsiveContainer = useSelector(state => state.ReduxSlice.responsiveContainer)
  const formConfirming = useSelector(state => state.AllFormData.formConfirming)
  const formFinishConfirming = useSelector(state => state.AllFormData.formFinistConfirm)
  const step = useSelector(state => state.AllFormData.step)
  const errorChecking = useSelector(state => state.AllFormData.errorChecking);
  var formName = ["Pre Qualifitions", "Property Details", "Loan Details", "Personal Details", "Confirming  Details"]




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
    if (a[0] !== 0 && a[1] !== 0 && a[2] !== 0 && a[3] !== 0) {
      dispatch(setFormFinistConfirm([[1,2,3,4,5], step, errorChecking]));
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
    dispatch(setFormFinistConfirm([array, stepcount, errorChecking]));
  }


  const submitEurusForm = () => {
    for (const variable in formSelectionPlusFormData.data) {
      if (!formSelectionPlusFormData.data[variable]) {

        let array = [errorChecking.length];
        for (let i = 0; i < errorChecking.length; i++) {
          if (i + 1 === step) {
            array[i] = step;
          }
          else {
            array[i] = errorChecking[i];
          }
        }
        dispatch(setFormFinistConfirm([formFinishConfirming, step, array]));
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
    if (formConfirming) { }
    else { dispatch(setFormFinistConfirm([formFinishConfirming, a, errorChecking])); }
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
      case 5: return (<SubmitConform confirmingForm={(data, select) => { setFormSelectionPlusFormData({ data, select }) }} />);
      default: return (null);
    }
  }

  return (
    <Box disableGutters maxWidth={responsiveContainer} height="87vh" pt="3%">
      <Box bgcolor="#fafafa" minHeight="90%" maxWidth={isBreakPoint ? "80%" : "70%"} m={isBreakPoint.sx?"0px 5%":"0px auto"}>

        {/*step icon and Text  setting and styling *****************************************************************************/}
        <Box ml={isBreakPoint? isBreakPoint.md?"0%":"3.5%":"8%"} display="flex" width={"100%"}>
          {
            formName.map((val, index) => {
              return (
                <>
                  <Box display="flex" alignItems="center" width="100%" height="40%" mt="3%">
                    <Box style={{
                      cursor: formConfirming ? "default" : "pointer",
                      backgroundColor: formFinishConfirming[index] !== 0 ? "#8cc63f" : errorChecking[index] === formFinishConfirming[index] ? "#662d91" : "red"
                    }}

                      component={Avatar}  width={isBreakPoint.sx ? "5%" : "15%"} height="100%" onClick={() => { formStepControlling(index + 1) }}>

                      {formFinishConfirming[index] === index + 1 ? <CheckIcon /> : index + 1}
                    </Box>
                    {
                      (index !== 4) && <Box bgcolor={formFinishConfirming[index] !== 0 ? "#8cc63f" : errorChecking[index] === formFinishConfirming[index] ? "#662d91" : "red"} 
                      width="100%" height=".7vh"></Box>
                    }
                  </Box>

                </>
              )
            })
          }
        </Box>

        <Box ml="10%" display="flex">
          {
            formName.map((val, index) => {
              return <>

                <Box mr={index === 4 ? "5%" : "0px"} display="flex" alignItems="center" width="100%" height="90%">
                  <Typography style={{

                    fontSize: isBreakPoint ? "80%" : null,
                    color: formFinishConfirming[index] !== 0 ? "#8cc63f" : errorChecking[index] === formFinishConfirming[index] ? "#662d91" : "red"
                  }}>
                    {val}
                  </Typography>

                </Box>

              </>
            })
          }
        </Box>

        {/*step icon and Text  setting and styling *****************************************************************************/}

        <Box width="100%" height="85%" position="relative" mt="10%">
          {
            formRender()
          }
        </Box>

        {
          (step !== 5) && 
          (<Box maxWidth="100%" display="flex" alignItems="center" justifyContent="center" mt="5%">
            <Button style={{ backgroundColor: "#662d91", padding: "1.5% 5%" , color:"white"}} onClick={submitEurusForm}>Next</Button>
          </Box>)
        }
      </Box>
    </Box>

  )
}

export default EurusFormSteps