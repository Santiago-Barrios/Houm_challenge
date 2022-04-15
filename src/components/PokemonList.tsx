import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";
import { Loading } from "./Loading";
import { PokeCard } from "./pokeCard";
import { useState } from 'react';

export const PokemonList = () => {
  const { isLoading, pokemons } = usePokemon();
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
    <div className="row rows-cols-1 row-cols-md-3 ">
      <button className="btn btn-primary  mb-5" onClick={ previousPage } >Anteriores</button>
      &nbsp;
      <button className="btn btn-primary mb-5" onClick={ nextPage }>siguientes</button>
      {filterPokemons().map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
      {isLoading && <Loading />}
    </div>
  );
};
