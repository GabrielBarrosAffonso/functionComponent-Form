import React, { useEffect, useState } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import ShippingData from "./ShippingData";
import { Typography } from "@material-ui/core";
import { Stepper , Step , StepLabel } from "@mui/material";

function MainForm({onSend, validateCPF}){
    const [actualStep, setActualStep] = useState(0)
    const [collectedData, setCollectedData] = useState({})
    useEffect(() => {
        if(actualStep === forms.length-1){
            onSend(collectedData)
        }
    }, [collectedData])

    const forms = [
        <UserData onSend={collectData}/>, 
        <PersonalData onSend={collectData} validateCPF={validateCPF}/>, 
        <ShippingData onSend={collectData}/>,
        <Typography variant="h5" >Thanks for Submitting</Typography>
    ]

    function collectData(data){
        setCollectedData({...collectedData, ...data});
        nextStep()
    }


    function nextStep(){
        setActualStep(actualStep+1)
    }


    return(
        <div>
            <Stepper activeStep={actualStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal</StepLabel></Step>
                <Step><StepLabel>Shipping</StepLabel></Step>
                <Step><StepLabel>Finish</StepLabel></Step>
            </Stepper>
            {
            /* {momentForm(actualStep)} */
            forms[actualStep]
            }
        </div>
    )
}

    // function momentForm(step){
    //     switch(step){
    //         case 0:
    //             return <UserData onSend={nextStep}/>;
    //         case 1:
    //             return <PersonalData onSend={nextStep} validateCPF={validateCPF}/>
    //         case 2: 
    //             return <ShippingData onSend={onSend}/>
    //         default:
    //             return <Typography> Error </Typography>
    //     }
    // }

export default MainForm