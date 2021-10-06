import React from "react";
import { TextField , Button , Switch , FormControlLabel } from "@material-ui/core";

function MainForm(){
    return(
        <div>
            <form className="">
                <p>Oi</p>
                <TextField id="name" label="Name" variant="outlined" fullWidth={true} margin="dense"/>

                <TextField id="surname" label="Surname" variant="outlined" fullWidth={true} margin="dense"/>

                <TextField id="cpf" label="CPF" variant="outlined" fullWidth={true} margin="dense"/>

                <FormControlLabel label="Offers" control={<Switch name="offers" defaultChecked />}/>
                {/* <Switch name="offers" defaultChecked /> */}

                <FormControlLabel label="News" control={<Switch name="news" defaultChecked />}/>
                {/* <Switch name="news" defaultChecked /> */}

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default MainForm