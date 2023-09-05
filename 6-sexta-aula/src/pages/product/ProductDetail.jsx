import { useParams, Link } from "react-router-dom";
import H1 from "../../components/h1/H1";
import Button from "../../components/buttons/Button";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const [slug,setSlug] = useState('');
  const slugParam = useParams();
  useEffect(() => {
    setSlug(slugParam.slug);
  }, [slugParam])
  return (
    <>
      <H1 text="Welcome!" />
      <Link to={'/'}><Button text="Página inicial"/></Link> | 
      <Link to={'/sobre'}><Button text="Sobre"/></Link> | 
      <Link to={'/contato'}><Button text="Contato"/></Link>
    </>
  )
}