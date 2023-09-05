import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import H1 from "../components/h1/H1";
import Button from "../components/buttons/Button";
import Product from '../contexts/ProductContext';
import ButtonContext from "../components/buttons/ButtonContext";
import HomeProvider from "../providers/HomeProvider";

export default function Home() {
  const [page, setPage] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setPage('Usando context e state');
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  })
  const config = {
    title: loading ? 'Carregando' : 'Exemplo já carregado'
  }
  return (
    <>
      <Product.Provider value={page}>
        <H1 />
      </Product.Provider>
      {/* { loading ? <h1>Carregando conteúdo</h1> : <h5>Carregou!</h5> } */}
      <h1 
        className={loading ? 'classLoading' : 'classTest'} 
        style={{ color: loading ? 'blue' : 'red' }} {...config}
      >
        { loading ? 'Carregando conteúdo' : 'Carregou!' }
      </h1>
      <Link to={'/'}><Button text="Página inicial"/></Link> | 
      <Link to={'/sobre'}><Button text="Sobre"/></Link> | 
      <Link to={'/contato'}><Button text="Contato"/></Link>
      <HomeProvider>
        <ButtonContext />
      </HomeProvider>
      {page}
    </>
  )
}