import React from 'react';
import {TextField, Button} from "@material-ui/core"

function ShippingData(){
    return(
        <div>
             <form>
                <TextField id="cep" label="cep" type="number" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField id="address" label="address" type="text" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField id="number" label="number" type="number" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField id="state" label="state" type="text" variant="outlined" fullWidth={true} margin="dense"/>
                <TextField id="city" label="city" type="text" variant="outlined" fullWidth={true} margin="dense"/>
                <Button type="submit" variant="contained" color="primary" fullWidth={true}> Finish </Button>
            </form>
        </div>
    )
}

export default ShippingData