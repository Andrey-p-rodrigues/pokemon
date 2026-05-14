import './card2.css';
import treecko from '../../assets/t.png';

import { UseFetchPokemon } from "../../hooks/UseFetchPokemon";

function App() {

  const {
    pokemon,
    loading,
    error
  } = UseFetchPokemon("treecko");

  if (loading) {
    return (
      <div className="loader">
        Carregando Pokédex...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Ocorreu um erro inesperado
      </div>
    );
  }

  return (

    <div className="App2">

      <h1>Poke Card</h1>

      <div className="pokemon-container">

        <div className="pokemon-card2">

          <h3>{pokemon.name}</h3>

          <img
            src={treecko}
            alt="squirtle"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {pokemon.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {pokemon.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {pokemon.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {pokemon.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {pokemon.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;