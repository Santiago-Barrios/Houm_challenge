import { useState } from "react";
import { PokemonList } from "../components/PokemonList";
import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

export const HomePage = () => {

  const { pokemons } = usePokemon();
  const [currentPage, setcurrentPage] = useState(0);
  const filterPokemons = (): Pokemon[] => {
    return pokemons.slice(currentPage, currentPage + 5);
  };


  const nextPage = () => {
    setcurrentPage( currentPage + 5 );
  }

  const previousPage = () => {
    if(currentPage > 0 )
    setcurrentPage( currentPage - 5 );
  }

  return (
    <>
      <h1> Pokemon List </h1>
      <hr />
      <button className="btn btn-primary  mb-5" onClick={ previousPage } >Anteriores</button>
      &nbsp;
      <button className="btn btn-primary mb-5" onClick={ nextPage }>siguientes</button>
      <PokemonList pokemonList={filterPokemons()} />
    </>
  );
};
