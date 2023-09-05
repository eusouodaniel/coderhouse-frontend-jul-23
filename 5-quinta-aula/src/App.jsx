import { useState } from 'react'
import './App.css'
import { Select } from './components/Select/Select';

function App() {
  const [option, setOption] = useState(1);
  const options = [
    { value: 'firstOption', text: 'Primeira opção'},
    { value: 'secondOption', text: 'Segunda opção'},
    { value: 'thirdOption', text: 'Terceira opção'},
    { value: 'fourthOption', text: 'Quarta opção'}
  ]

  function optionSelected(value) {
    console.log(value);
    setOption(value);
  }
  // function submit(evt) {
  //   evt.preventDefault();
  //   alert('Enviei o form');
  // }
  // function preventVowal(evt) {
  //   const letter = evt.key.toLowerCase();
  //   if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
  //     evt.preventDefault();
  //     alert('Não é possível digitar uma vogal, tente novamente! :)')
  //   }
  //   console.log(!Number(letter));
  // }
  return (
    <>
      <Select optionSelected={optionSelected} options={options}/>
      {/* <button onClick={click}>Comprar</button>
      <form onSubmit={(evt) => submit(evt)}>
        <input type='email' placeholder='Digite seu email' />
        <input type='submit' value='Enviar' />
      </form>
      <input type='text' onKeyDown={(evt) => preventVowal(evt)} placeholder='Digite sua descrição' /> */}
    </>
  )
}

export default App
