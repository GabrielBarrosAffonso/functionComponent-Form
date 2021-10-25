function validateCPF(cpf){
    if(cpf.length !== 11){
      return {valid:false, text:"CPF must have 11 digits"}
    } else {
      return {valid:true, text:""}
    }
}

function validatePassword(password){
    if(password.length < 4 || password.length > 72){
      return {valid:false, text:"Password must have between 4 and 72 digits"}
    } else {
      return {valid:true, text:""}
    }
}



export {validateCPF, validatePassword};
