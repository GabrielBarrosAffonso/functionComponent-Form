import React, { useState } from "react";
import {TextField, Button} from "@material-ui/core"

function UserData({onSend}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                onSend({email , password});
            }}>
                <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} required id="email" label="email" type="email" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} required id="password" label="password" type="password" variant="outlined" fullWidth={true} margin="dense"/>
                <Button type="submit" variant="contained" color="primary"> Submit </Button>
                <Button>Go Back</Button>
            </form>
        </div>
    )
}

export default UserData