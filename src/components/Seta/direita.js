import { Link } from "react-router-dom";

import direita from "../../assets/direita.png";
import "./seta.css";

function Seta({ to }) {

  return (

    <button className="Cdireita">

      <Link to={to}>

        <img
          src={direita}
          alt="Próximo"
        />

      </Link>


    </button>

    

  );
}

export default Seta;