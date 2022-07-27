import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Container from './components/Container';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const name = 'CoderHouse'

  return (
    <div className="App">
    <NavBar/> 
    <Container/>
    <CartWidget/> 
    <ItemListContainer greeting = 'Pagina cosas importadas' />
    </div>
  );
}

export default App;