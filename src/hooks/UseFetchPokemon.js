import { useEffect, useState } from "react";
import axios from "axios";
import { openDB } from "idb";


const dbPromise = openDB("pokemon-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("pokemons")) {
      db.createObjectStore("pokemons", { keyPath: "name" });
    }
  },
});


const getPokemonDB = async (nome) => {
  const db = await dbPromise;
  return db.get("pokemons", nome);
};

const savePokemonDB = async (pokemon) => {
  const db = await dbPromise;
  return db.put("pokemons", pokemon);
};

export function UseFetchPokemon(poke) {
  const [pokemon, setPokemon] = useState(null);
  const [specie, setSpecie] = useState(null);
  const [evolution, setEvolution] = useState(null);
  const [myType, setMyType] = useState("");
  const [myPokemon, setMyPokemon] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${poke}`
        );
        setPokemon(res.data);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };


    const checkDB = async () => {
      const cashed = await getPokemonDB(poke);

      if (!cashed) {
        await getData();
      } else {
        setMyPokemon(cashed);
        setLoading(false);
      }
    };


    checkDB();

  }, [poke]);


  useEffect(() => {
    if (!pokemon || myPokemon) return;

    const getSpecie = async () => {
      try {
        const res = await axios.get(pokemon.species.url);
        setSpecie(res.data);
      } catch (err) {
        console.error("Erro ao carregar espécie:", err);
      }
    };

    getSpecie();
  }, [pokemon, myPokemon]);

  useEffect(() => {
    if (!specie || myPokemon) return;

    const getEvolutions = async () => {
      try {
        const res = await axios.get(specie.evolution_chain.url);
        setEvolution(res.data);
      } catch (err) {
        console.error("Erro ao carregar evolução:", err);
      }
    };

    getEvolutions();
  }, [specie, myPokemon]);

  useEffect(() => {
    if (!pokemon || !pokemon.types || pokemon.types.length === 0 || myPokemon) {
      return;
    }

    const type = pokemon.types[0].type.name;

    if (type === "normal" || type === "fighting") {
      setMyType("corpo");
    } else if (type === "psychic" || type === "fairy") {
      setMyType("mente");
    } else if (type === "ghost" || type === "dark") {
      setMyType("sombra");
    } else if (
      type === "grass" ||
      type === "bug" ||
      type === "poison"
    ) {
      setMyType("natureza");
    } else if (
      type === "water" ||
      type === "ice"
    ) {
      setMyType("agua");
    } else if (
      type === "ground" ||
      type === "steel" ||
      type === "rock"
    ) {
      setMyType("terra");
    } else if (
      type === "electric" ||
      type === "flying" ||
      type === "dragon"
    ) {
      setMyType("tempestade");
    } else if (type === "fire") {
      setMyType("fogo");
    }
  }, [pokemon, myPokemon]);

  useEffect(() => {
    if (
      myPokemon ||
      !pokemon ||
      !evolution ||
      !myType ||
      !pokemon.stats ||
      pokemon.stats.length < 2 ||
      !pokemon.sprites ||
      !pokemon.sprites.other ||
      !pokemon.sprites.other["official-artwork"] ||
      !evolution.chain
    ) {
      return;
    }

    const newPokemon = {
      name: pokemon.name,
      nome: pokemon.name,
      vida: pokemon.stats[0].base_stat,
      ataque: pokemon.stats[1].base_stat,
      tipo: myType,
      evolucao: evolution.chain.species.name,
      imagem: pokemon.sprites.other["official-artwork"].front_default,
      imagemshiny: pokemon.sprites.front_shiny,
    };


    const saveBanco = async () => {
      try {
        await savePokemonDB(newPokemon);
      } catch (err) {
        console.error("Erro ao salvar:", err);
      }
    };

    saveBanco();
    setMyPokemon(newPokemon);
    setLoading(false);
  }, [pokemon, evolution, myType, myPokemon]);

  return {
    myPokemon,
    loading,
    error,
  };
}
