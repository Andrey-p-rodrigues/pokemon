import { Link } from "react-router-dom";

import pokebola from "../../assets/pokebola.png";
import "./botaoPokebola.css";

function BotaoPokebola({ to }) {

  return (

    <button className="bola">

      <Link to={to}>

        <img
          src={pokebola}
          alt="Pokebola"
        />

      </Link>

    </button>

  );
}

export default BotaoPokebola;