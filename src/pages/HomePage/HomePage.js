import "./homePage.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons, setLoading, setError } from "../../slices/pokemonSlice";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemons, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=120 "
      );
      const pokemonPromises = response.data.results.map(async (pokemon) => {
        const data = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          image: data.data.sprites.other["official-artwork"].front_default,
        };
      });
      const pokemonData = await Promise.all(pokemonPromises);
      console.log(pokemonData);
      dispatch(setPokemons(pokemonData));
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      dispatch(setError("Failed to fetch Pokemon data."));
    }
  };

  const determineSize = (index) => {
    if (index % 3 === 0) return "large";
    if (index % 2 === 0) return "medium";
    return "small";
  };

  return (
    <div className="main-div">
      {loading && <p>Loading...</p>}

      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <div className="grid-container">
          {pokemons.map((pokemon, index) => {
            return (
              <div
                className={`card ${determineSize(index)}`}
                key={index}
                onClick={() => {
                  navigate(`/pokemon/${pokemon.name}`);
                }}
              >
                <h3 style={{ margin: 0 }}>
                  {" "}
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h3>
                <img
                  className="pokemon-img"
                  src={pokemon.image}
                  href={pokemon.name}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
