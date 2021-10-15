import './App.css';
import MainForm from './components/MainForm';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
          <h1>FORMULÁRIO DE CADASTRO</h1>
          <MainForm onSend={onSendForm} validateCPF={validateCPF}/>
    </Container>
  );
}

function onSendForm(data){
  console.log(data)
}

function validateCPF(cpf){
  if(cpf.length !== 11){
    return {valid:false, text:"CPF must have 11 digits"}
  } else {
    return {valid:true, text:""}
  }
}

export default App;
