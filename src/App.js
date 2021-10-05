import './App.css';
import MainForm from './components/MainForm';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
          <h1>FORMULÁRIO DE CADASTRO</h1>
          <MainForm />
    </Container>
  );
}

export default App;
