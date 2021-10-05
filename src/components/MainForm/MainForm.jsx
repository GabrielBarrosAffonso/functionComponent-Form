import React from "react";
import Button from '@material-ui/core/Button';

function MainForm(){
    return(
        <div>
            <form >
                <label>Nome</label>
                <input type="text"/>

                <label>Sobrenome</label>
                <input type="text"/>

                <label>CPF</label>
                <input type="text"/>

                <label>Promoções</label>
                <input type="checkbox"/>

                <label>Novidades</label>
                <input type="checkbox"/>

                <Button variant="contained" color="primary" type="submit">
                    Botão
                </Button>
            </form>
        </div>
    )
}

export default MainForm