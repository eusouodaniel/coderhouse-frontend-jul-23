import './App.css'
import Button from './components/Button/Button';
import Input from './components/Input/Input';
 
function App() {
  return (
    <>
      <h1>Aula sobre componentes</h1>
      {/* <Button text='Enviar formulário' value='Enviar agora' />
      <Input placeholder='Digite seu email' type='text' />
      <Button text='Logar' value='agora' /> */}
      <Button text='Logar' value='agora' />
      <Button text='Logar' value='agora'>
        <Input placeholder='Digite seu nome' type='text' />
      </Button>
    </>
  )
}

export default App
