import H1 from './components/h1/H1';
import { Button } from './components/button/Button';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('Estou no app');
  useEffect(() => {
    console.log('APP montado');
  })
  return (
    <>
      {console.log('Cheguei no APP')}
      {value}
      <H1 message="Outra aula de componente" showButton={Button} />
    </>
  )
}

export default App
