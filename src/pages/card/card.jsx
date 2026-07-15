import './card.css';
import { useParams, Link } from "react-router-dom";

import { UseFetchPokemon } from "../../hooks/UseFetchPokemon";

function App() {
  // Obtém o parâmetro "id" da URL
  const { id } = useParams();

  // Busca os dados do Pokémon usando o id
  const {
    myPokemon,
    loading,
    error
  } = UseFetchPokemon(id);

  // Enquanto os dados são carregados
  if (loading) {
    return <div className="loader">Carregando Pokédex...</div>;
  }

  // Caso ocorra algum erro na busca
  if (error) {
    return <div className="error">Ocorreu um erro inesperado</div>;
  }

  // Evita renderizar a página antes dos dados existirem
  if (!myPokemon) {
    return <div className="loader">Carregando dados...</div>;
  }

  return (
    <div className="App">
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
            <h4>Tipo</h4>
            <p>{myPokemon.tipo}</p>
          </div>
        </div>

        <div className="evolution">
          <h4>Linha evolutiva</h4>

          <div className="evolution-chain">

            {myPokemon.evolucao.map((evo, index) => ( //Percorre o array de evoluções e exibe cada uma
              <div className="evolution-item" key={evo}>
                <span className="evo-name">{evo}</span>


                {index < myPokemon.evolucao.length - 1 && ( //Mostra a seta apenas se não for a última evolução 
                  <span className="arrow">➜</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;