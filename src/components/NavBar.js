import App from "../App";
import CartWidget from "./CartWidget";

function NavBar () {
    return <>

        <div>
          <CartWidget />
        </div>

    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">TecnoImport</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link" href="#">Electrodomesticos</a>
      <a className="nav-link" href="#">Tecnologia</a>
      <a className="nav-link" href="#">Indumentaria</a>
      <a className="nav-link" href="#">Pesca</a>
      </div>
    </div>
    </div>
    </nav>
    </>
}

export default App;
