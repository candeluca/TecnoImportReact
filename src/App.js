import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <div className="App">
    <NavBar/> 
    <CartWidget/> 
    <ItemListContainer greeting = 'Pagina cosas importadas' />
    </div>
  );
}

export default App;