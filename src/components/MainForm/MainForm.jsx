import React, {useState} from "react";
import { TextField , Button , Switch , FormControlLabel } from "@material-ui/core";

function MainForm({onSend}){
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [cpf, setCpf] = useState("")
    const [offers, setOffers] = useState(true)
    const [news, setNews] = useState(true)

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSend({name, surname, cpf, news, offers})
            }}>

                <TextField 
                value={name}
                onChange={(e) => {
                    let tempName = e.target.value;
                    if(tempName.length >= 15){
                        tempName = tempName.substr(0, 15);
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
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value)
                }}
                id="cpf" 
                label="CPF" 
                variant="outlined"
                fullWidth={true} 
                margin="dense"/>

                <FormControlLabel
                label="Offers" 
                control={<Switch onChange={(e) => {
                            setOffers(e.target.checked)
                        }} checked={offers} name="offers"/>}/>
                {/* <Switch name="offers" defaultChecked /> */}

                <FormControlLabel 
                label="News" 
                control={<Switch onChange={(e) => {
                            setNews(e.target.checked)
                        }} checked={news} name="news"/>}/>
                {/* <Switch name="news" defaultChecked /> */}

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default MainForm