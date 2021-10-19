import React from "react";
import {TextField, Button} from "@material-ui/core"

function UserData({onSend}){
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                onSend();
            }}>
                <TextField required id="email" label="email" type="email" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField required id="password" label="password" type="password" variant="outlined" fullWidth={true} margin="dense"/>
                <Button type="submit" variant="contained" color="primary"> Submit </Button>
                <Button>Go Back</Button>
            </form>
        </div>
    )
}

export default UserData