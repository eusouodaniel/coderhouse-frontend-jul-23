import { Link } from 'react-router-dom';
import H1 from '../components/h1/H1';
import Button from '../components/buttons/Button';
import { useEffect, useState } from 'react';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getFirestore, collection, getDocs, where, query, doc, getDoc } from 'firebase/firestore'

export default function Contact() {
    const [product, setProduct] = useState('');
    useEffect(() => {
      const db = getFirestore();
      const products = query(collection(db, 'products'), where('price', '>=', 10));
      getDocs(products).then((result) => {
        if (result.size > 0) {
          console.log(result.docs.forEach((doc) => console.log(doc.data())));
          setProduct(result.docs.map((doc) => ({
            id: doc.id,
            ...doc.data,
          })))
        }
      })
      // const product = doc(db, 'products', 'lLGKKobsEc9Cg3UpKV18');
      // getDoc(product).then((result) => {
      //   if (result.exists()) {
      //     setProduct({ id: result.id, ...result.data })
      //     console.log(product)
      //   }
      // });
    }, []) 
    return (
      <>
        {/* {products.map((product) => {
          return <H1 text={product.category} key={product.id} />
        })} */}
        <H1 text='Welcome!' />
        <Link to={'/'}><Button text="Página inicial"/></Link> | 
        <Link to={'/sobre'}><Button text="Sobre"/></Link> | 
        <Link to={'/contato'}><Button text="Contato"/></Link>
      </>
    )
  }