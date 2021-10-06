import React, {useState} from "react";
import { TextField , Button , Switch , FormControlLabel } from "@material-ui/core";

function MainForm(){
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(name)
                console.log(surname)
            }}>

                <TextField 
                value={name}
                onChange={(e) => {
                    let tempName = e.target.value;
                    if(tempName.length >= 5){
                        tempName = tempName.substr(0, 5);
                    }
                    setName(tempName)
                }} 
                id="name" 
                label="Name" 
                variant="outlined" 
                fullWidth={true} 
                margin="dense"/>

                <TextField 
                value={surname}
                onChange={(e) => {
                    setSurname(e.target.value)
                }}
                id="surname" 
                label="Surname" 
                variant="outlined" 
                fullWidth={true} 
                margin="dense"/>

                <TextField 
                id="cpf" 
                label="CPF" 
                variant="outlined"
                fullWidth={true} 
                margin="dense"/>

                <FormControlLabel 
                label="Offers" 
                control={<Switch name="offers" defaultChecked />}/>
                {/* <Switch name="offers" defaultChecked /> */}

                <FormControlLabel 
                label="News" 
                control={<Switch name="news" defaultChecked />}/>
                {/* <Switch name="news" defaultChecked /> */}

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default MainForm