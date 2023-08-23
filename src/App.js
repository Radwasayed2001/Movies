import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Component/Home/Home';
import Movies from './Component/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import FavPage from './Component/Fav/FavPage/FavPage';
import CartPage from './Component/Cart/CartPage/CartPage';
import { Provider } from 'react-redux';
import {Store} from './Regux/store';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
function App() {
  return (
    <Provider store={Store}>
    <div>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} /> 
        <Route path="fav" element={<FavPage />} /> 
        <Route path="cart" element={<CartPage/>}/> 
        <Route path="contact" element={<Contact/>}/> 
        <Route path="about" element={<About/>}/> 
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
