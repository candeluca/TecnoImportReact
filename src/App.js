import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  const name = 'CoderHouse'

//operador ternario
const condition = true
if (condition) {
  console.log ('verdadero')
} else {
  console.log ('falso')
}

condition ? console.log ('verdadero') : console.log ('falso')

console.log ( condition ? 'verdadero' : 'falso')

// spread operator: 

const numeros = [1, 2, 3, 4, 5, 6]
const letras = ['a', 'b', 'c', 'd']

const alfanumericosVersionVieja = numeros.concat(letras)

const alfanumericosVersionSugar = [...numeros, ...letras]

console.log ({ alfanumericosVersionVieja })

console.log ({ alfanumericosVersionSugar })

  return (
    <div className="App">
    <NavBar/> 
    </div>
  );
}

export default App;