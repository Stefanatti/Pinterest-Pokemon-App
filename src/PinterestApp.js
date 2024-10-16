import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/header.css";
import "./styles/homePage.css";
import "./styles/pokemonDetails.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/PokemonDetails";
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
