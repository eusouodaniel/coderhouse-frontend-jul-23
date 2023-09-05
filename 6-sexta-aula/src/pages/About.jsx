import { Link } from 'react-router-dom';
import H1 from '../components/h1/H1';
import Button from '../components/buttons/Button';
import { collection, getFirestore, addDoc, doc, updateDoc, writeBatch } from 'firebase/firestore';

export default function About() {
    const mountOrder = () => {
      const order = {
        buyer: { name: 'Daniel', phone: '11985420102', email: 'daniel.rodrigues@coderhouse.com.br'},
        items: [{ name: 'Calça', price: 140, quantity: 3 }, { name: 'Camisa', price: 50, quantity: 2 }],
        total: 520
      }
      const db = getFirestore();
      const dbCollection = collection(db, 'orders');
      addDoc(dbCollection, order).then(({ id }) => console.log(id))
    }
    const updateOrder = () => {
      const db = getFirestore();
      const dbCollection = doc(db, 'orders', 'qYuY4X96IoJxwS21YLIG');
      updateDoc(dbCollection, { buyer: { name: 'Daniel', phone: '11985420102', email: 'daniel.rodrigues@coderhouse.com.br'} });
    }
    return (
      <>
        <button onClick={mountOrder}>Cadastrar</button>
        <button onClick={updateOrder}>Atualizar</button>
        <H1 text='Welcome!' />
        <Link to={'/'}><Button text="Página inicial"/></Link> | 
        <Link to={'/sobre'}><Button text="Sobre"/></Link> | 
        <Link to={'/contato'}><Button text="Contato"/></Link>
      </>
    )
  }