import { useEffect, useState } from "react";
import axios from "axios";

export function UseFetchPokemon(name) {

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    async function getData() {

      try {

        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        setPokemon(res.data);

      } catch (err) {

        console.error(err);
        setError(true);

      } finally {

        setLoading(false);

      }
    }

    getData();

  }, [name]);

  return {
    pokemon,
    loading,
    error
  };
}