import { useEffect, useState } from 'react'
import './App.css'
import { buscaEndereco } from './services/cep';
import { getPoke } from './services/poke';
import { useParams } from 'react-router-dom';

function App() {
  const [endereco, setEndereco] = useState([]);
  const [poke, setPoke] = useState([]);
  const { cep } = useParams();
  useEffect(() => {
    buscaEndereco(setEndereco, cep);
    getPoke(setPoke);
  }, []);
  return (
    <>
      <div>
        <h1>Endereço</h1>
        <p>{ endereco.map((end) => 
          end.logradouro
        ) }</p>
      </div>
      <div>
        <h1>Habilidade do Pokemon</h1>
        <p>{ poke.map((pok) => 
          pok.ability.name
        ) }</p>
      </div>
    </>
  )
}

export default App
