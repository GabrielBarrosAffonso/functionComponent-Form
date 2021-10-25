import React, { useState , useContext } from "react";
import {TextField, Button} from "@material-ui/core"
import ValidationsSignIn from "../../contexts/ValidationsSignIn";
import useErrors from "../../hooks/useErrors";

function UserData({onSend}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const validations = useContext(ValidationsSignIn)
    const [errors, validateFields, canSend] = useErrors(validations)

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(canSend()){
                    onSend({email , password});
                }
            }}>
                <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} required id="email" label="email" type="email" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField value={password} name="password" onChange={(e) => {setPassword(e.target.value)}} onBlur={validateFields} helperText={errors.password.text} error={!errors.password.valid} required id="password" label="password" type="password" variant="outlined" fullWidth={true} margin="dense"/>
                <Button type="submit" variant="contained" color="primary"> Next </Button>
                <Button>Go Back</Button>
            </form>
        </div>
    )
}

export default UserData