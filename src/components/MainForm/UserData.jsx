import React, { useState , useContext } from "react";
import {TextField, Button} from "@material-ui/core"
import ValidationsSignIn from "../../contexts/ValidationsSignIn";

function UserData({onSend}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState({password:{valid:true, text:""}})

    const validations = useContext(ValidationsSignIn)
    function validateFields(e){
        const {name , value} = e.target
        const newState = {...errors}
        newState[name] = validations[name](value)
        setErrors(newState)
    }

    function canSend(){
        for(let field in errors){
            if(!errors[field].valid){
                return false
            }
        }
        return true
    }

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