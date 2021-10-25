import React, {useState, useContext} from "react";
import { TextField , Button , Switch , FormControlLabel } from "@material-ui/core";
import ValidationsSignIn from "../../contexts/ValidationsSignIn";

function PersonalData({onSend}){
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [cpf, setCpf] = useState("")
    const [offers, setOffers] = useState(true)
    const [news, setNews] = useState(true)
    const [errors, SetErrors] = useState({cpf:{valid:true, text:""}})

    const validations = useContext(ValidationsSignIn)

    function validateFields(e){
        console.log(e.target)
        const {name , value} = e.target
        let newState = {...errors}
        newState[name] = validations[name](value)
        SetErrors(newState)
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
                e.preventDefault();
                if(canSend()){
                    onSend({name, surname, cpf, news, offers})
                }
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
                required
                id="name" 
                label="Name" 
                variant="outlined" 
                fullWidth={true} 
                margin="dense"/>

                <TextField 
                required
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
                onBlur={validateFields}
                id="cpf" 
                label="CPF" 
                variant="outlined"
                fullWidth={true} 
                margin="dense"
                name="cpf"
                helperText={errors.cpf.text}
                error={!errors.cpf.valid}/>
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
                    Next
                </Button>
            </form>
        </div>
    )
}

export default PersonalData