import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Input from './components/Input';
import Container from './components/Container';
import CartWidget from './components/CartWidget';

function App() {
  const name = 'CoderHouse'

  return (
    <div className="App">
    <NavBar/> 
    <Container/>
    <CartWidget/>
    </div>
  );
}

export default App;