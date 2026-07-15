import { Link } from "react-router-dom";

import direita from "../../assets/direita.png";
import esquerda from "../../assets/esquerda.png";
import "./seta.css";

function Seta({ to }) {

  return (

    <button className="Cesquerda">

      <Link to={to}>

        <img
          src={esquerda}
          alt="Anterior"
        />

      </Link>

    </button>

    

  );
}

export default Seta;