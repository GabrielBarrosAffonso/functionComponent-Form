import React from "react";
import {TextField, Button} from "@material-ui/core"

function UserData(){
    return(
        <div>
            <form>
                <TextField id="email" label="email" type="email" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField id="password" label="password" type="password" variant="outlined" fullWidth={true} margin="dense"/>
                <Button type="submit" variant="contained" color="primary"> Submit </Button>
            </form>
        </div>
    )
}

export default UserData