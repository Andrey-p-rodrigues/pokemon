import './card2.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { UseFetchPokemon } from "../../hooks/UseFetchPokemon";

function App2() {
  const { id } = useParams();

  const {
    myPokemon,
    loading,
    error
  } = UseFetchPokemon(id);

  if (loading) {
    return <div className="loader">Carregando Pokédex...</div>;
  }

  if (error) {
    return <div className="error">Ocorreu um erro inesperado</div>;
  }

  if (!myPokemon) {
    return <div className="loader">Carregando dados...</div>;
  }

  return (
    <div className="App2">
      <h1>Poke Card</h1>

      <div className="pokemon-container">
        <div className="pokemon-card">
          <h3>{myPokemon.nome}</h3>

          <img
            src={myPokemon.imagem}
            alt={myPokemon.nome}
            className="pokemon"
          />

          <div className="stats">
            <p>
              <strong>HP:</strong> {myPokemon.vida}
            </p>

            <p>
              <strong>Attack:</strong> {myPokemon.ataque}
            </p>

            <p>
              <strong>Defense:</strong> {myPokemon.defesa}
            </p>

            <p>
              <strong>Speed:</strong> {myPokemon.velocidade}
            </p>
          </div>

          <div className="types">
            <p>
              {myPokemon.tipo}
            </p>
          </div>

          <p>
            <strong>Evolução:</strong> {myPokemon.evolucao}
          </p>
        </div>
      </div>

      <Proximo to="/pokemon/gastly" />
    </div>
  );
}

export default App2;