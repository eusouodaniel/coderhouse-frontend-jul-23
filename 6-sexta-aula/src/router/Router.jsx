import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/errors/NotFound';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Product from '../pages/product/Product';
import ProductDetail from '../pages/product/ProductDetail';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='/sobre' element={<About/>}></Route>
        <Route exact path='/contato' element={<Contact/>}></Route>
        <Route exact path='/produtos' element={<Product/>}></Route>
        <Route exact path='/produto/:slug' element={<ProductDetail/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}