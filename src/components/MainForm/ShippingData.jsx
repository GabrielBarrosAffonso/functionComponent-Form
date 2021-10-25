import React, { useState } from 'react';
import {TextField, Button} from "@material-ui/core"

function ShippingData({onSend}){
    const [cep, setCep] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    return(
        <div>
             <form onSubmit={(e) => {
                e.preventDefault();
                onSend({cep, address, number, state, city})
             }}>
                <TextField 
                    value={cep} onChange={(e) => {setCep(e.target.value)}}
                    id="cep" label="cep" type="number" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField 
                    value={address} onChange={(e) => {setAddress(e.target.value)}}
                    id="address" label="address" type="text" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField 
                    value={number} onChange={(e) => {setNumber(e.target.value)}}
                    id="number" label="number" type="number" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField 
                    value={state} onChange={(e) => {setState(e.target.value)}}
                    id="state" label="state" type="text" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField 
                    value={city} onChange={(e) => {setCity(e.target.value)}}
                    id="city" label="city" type="text" variant="outlined" fullWidth={true} margin="dense"/>
                <Button type="submit" variant="contained" color="primary" fullWidth={true}> Submit </Button>
            </form>
        </div>
    )
}

export default ShippingData