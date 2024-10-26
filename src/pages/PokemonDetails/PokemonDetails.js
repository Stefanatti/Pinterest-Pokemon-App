import "./pokemonDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(pokemonName);

  useEffect(() => {
    if (!pokemonName) return;

    const fetchPokemonDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
        console.log("Fetched Pokemon Data:", response.data);
      } catch (err) {
        console.error("Error fetching Pokemon Details:", err);
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!pokemonData) return null;

  return (
    <div className=" pokemon-details-div">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-div">
          <div className="image_div">
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt={pokemonData.name}
            />
          </div>
          <div className="details_div">
            <div className="all-details">
              <h1>
                {pokemonData.name.charAt(0).toUpperCase() +
                  pokemonData.name.slice(1)}
              </h1>
              <div className="pokemon-features">
                <h2>
                  Type:{" "}
                  {pokemonData.types.map((type) => type.type.name).join(", ")}
                </h2>
                <h2>Height: {pokemonData.height} decimetres</h2>
                <h2>Weight: {pokemonData.weight} hectograms</h2>
                <h2>
                  Abilities:{" "}
                  {pokemonData.abilities
                    .map((ability) => ability.ability.name)
                    .join(", ")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
