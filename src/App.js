import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <div className="App">
    <NavBar/> 
    <CartWidget/> 
    <ItemListContainer greeting = 'Pagina cosas importadas' />
    <ItemCount stock={10} initial={1}/>
    <ItemDetailContainer />
    </div>
  );
}

export default App;