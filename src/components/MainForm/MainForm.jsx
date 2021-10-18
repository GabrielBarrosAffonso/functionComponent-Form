import React from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import ShippingData from "./ShippingData";

function MainForm({onSend, validateCPF}){
    return(
        <div>
           <PersonalData onSend={onSend} validateCPF={validateCPF} />
           <UserData />
           <ShippingData />
        </div>
    )
}

export default MainForm