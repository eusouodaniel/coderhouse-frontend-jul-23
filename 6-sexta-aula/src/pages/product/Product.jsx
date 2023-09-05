import { useEffect, useState } from "react"
import { Link, NavLink } from 'react-router-dom';
import Button from "../../components/buttons/Button";
import ProductItem from "../../components/items/ProductItem";

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([{
        id: 1,
        name: 'Produto 1',
        description: 'Um produto muito legal',
        price: 100,
        category: 'fit',
        slug: 'produto-1'
    },{
        id: 2,
        name: 'Produto 2',
        description: 'Um produto não tão legal assim',
        price: 50,
        category: 'outono',
        slug: 'produto-2'
    },{
        id: 3,
        name: 'Produto 3',
        description: 'Um produto bacana',
        price: 100,
        category: 'fit',
        slug: 'produto-3'
    }])
  }, [])
  return (
    <>
      {products.map((product) => {
        return <NavLink key={product.id} to={`/produto/${product.slug}`}>
                <ProductItem key={product.id} name={product.name} description={product.description}></ProductItem>
               </NavLink>
      })}
      <Link to={'/'}><Button text="Página inicial"/></Link> | 
      <Link to={'/sobre'}><Button text="Sobre"/></Link> | 
      <Link to={'/contato'}><Button text="Contato"/></Link>
    </>
  )
}