import './App.css';
import MainForm from './components/MainForm';
import { Container } from '@material-ui/core';
import {validateCPF, validatePassword} from "./models/signUp"
import ValidationsSignIn from './contexts/ValidationsSignIn';

function App() {
  return (
    <Container component="article" maxWidth="sm">
          <h1>FORMULÁRIO DE CADASTRO</h1>
           <ValidationsSignIn.Provider 
            value={{cpf: validateCPF, password: validatePassword }} 
           >
            <MainForm onSend={onSendForm}/>
          </ValidationsSignIn.Provider>
    </Container>
  );
}

function onSendForm(data){
  console.log(data)
}

export default App;
