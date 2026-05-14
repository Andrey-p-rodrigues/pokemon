import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

import fundo from "../../assets/fundo.jpg";
import avatar from "../../assets/avatar.png";

import PokeballButton from "../../components/Pokebolas/botaoPokebola";

function TrainerPage() {

  return (

    <div
      className="main-bg"
      style={{ backgroundImage: `url(${fundo})` }}
    >

      <div className="container">

        <h1>Treinador Pokémon</h1>

        <div className="card">

          <div className="avatar">

            <img
              src={avatar}
              alt="Avatar treinador"
            />

          </div>

          <p>
            <strong>Nome: Andrey</strong>
          </p>

          <p>
            <strong>Idade: 16</strong>
          </p>

          <p>
            <strong>Nickname: Andreyzada</strong>
          </p>

          <p>
            <strong>Pokemons: 2</strong>
          </p>

          <div className="pokebolas">

            <PokeballButton to="/pokemon" />

            <PokeballButton to="/pokemon2" />

          </div>

          <button className="pokebola">

            <Link to="/pokemons">
              VER TIME INTEIRO
            </Link>

          </button>

        </div>

      </div>

    </div>

  );

}

export default TrainerPage;