import React, { useState } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import ShippingData from "./ShippingData";

function MainForm({onSend, validateCPF}){
    const [actualStep, setActualStep] = useState(0)
    const forms = [
        <UserData onSend={nextStep}/>, 
        <PersonalData onSend={nextStep} validateCPF={validateCPF}/>, 
        <ShippingData onSend={onSend}/>
    ]

    function nextStep(){
        setActualStep(actualStep+1)
    }

    function previousStep(){
        setActualStep(actualStep-1)
    }

    return(
        <div>
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