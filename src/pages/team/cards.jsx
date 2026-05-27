import './cards.css';

import soculos from '../../assets/soculos.png';
import treecko2 from '../../assets/t.png';

import { UseFetchPokemon } from "../../hooks/UseFetchPokemon";

function App() {

  const {
    pokemon: squirtle,
    loading: loadingSquirtle,
    error: errorSquirtle
  } = UseFetchPokemon("squirtle");

  const {
    pokemon: treecko,
    loading: loadingTreecko,
    error: errorTreecko
  } = UseFetchPokemon("treecko");

  const {
    pokemon: gastly,
    loading: loadinggastly,
    error: errorgastly
  } = UseFetchPokemon("gastly");


  if (loadingSquirtle || loadingTreecko || loadinggastly) {

    return (
      <div className="loader">
        Carregando Pokédex...
      </div>
    );

  }

  if (errorSquirtle || errorTreecko || errorgastly) {

    return (
      <div className="error">
        Ocorreu um erro inesperado
      </div>
    );

  }

  return (

    <div className="Apps">

      <h1>TIME</h1>

      <div className="pokemon-container">

        {/* Squirtle */}

        <div className="water-card">

          <h3>{squirtle.name}</h3>

          <img
            src={squirtle.sprites.front_default}
            alt="squirtle"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {squirtle.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {squirtle.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {squirtle.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {squirtle.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {squirtle.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

        {/* Treecko */}

        <div className="grass-card">

          <h3>{treecko.name}</h3>

          <img
            src={treecko.sprites.front_default}
            alt="treecko"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {treecko.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {treecko.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {treecko.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {treecko.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {treecko.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

        <div className="grass-card">

          <h3>{gastly.name}</h3>

          <img
            src={gastly.sprites.front_default}
            alt="treecko"
            className="pokemon"
          />

          <div className="stats">

            <p>
              <strong>HP:</strong>
              {gastly.stats[0].base_stat}
            </p>

            <p>
              <strong>Attack:</strong>
              {gastly.stats[1].base_stat}
            </p>

            <p>
              <strong>Defense:</strong>
              {gastly.stats[2].base_stat}
            </p>

            <p>
              <strong>Speed:</strong>
              {gastly.stats[5].base_stat}
            </p>

          </div>

          <div className="types">

            {gastly.types.map((type, index) => (

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