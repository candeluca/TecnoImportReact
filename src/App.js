import logo from './logo.svg';
import './App.css';

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

const alfanumericos = [...numeros].push (letras)
const alfanumericosVersionS = [...numeros, ...letras]

console.log ( { alfanumericos })

console.log ( { alfanumericosVersionS })

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TecnoImport</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Electrodomesticos</a>
        <a class="nav-link" href="#">Tecnologia</a>
        <a class="nav-link" href="#">Indumentaria</a>
        <a class="nav-link disabled">Pesca</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}

export default App;
