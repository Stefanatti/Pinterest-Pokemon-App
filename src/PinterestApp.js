import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { HomePage, PokemonDetails } from "./pages";

function PinterestApp() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default PinterestApp;
