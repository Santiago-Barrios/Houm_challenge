import { useState } from "react";
import { Loading } from "../components/Loading";
import { PokemonList } from "../components/PokemonList";
import { PokeTitle } from "../components/PokeTitle";
import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

export const HomePage = () => {

  const { isLoading, pokemons } = usePokemon();
  const [currentPage, setcurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filterPokemons = (): Pokemon[] => {

    if(search.length === 0)
      return pokemons.slice(currentPage, currentPage + 12);

    //
    const filtered = pokemons.filter( poke => poke.name.includes( search.toLocaleLowerCase() ) );
    return filtered.slice( currentPage, currentPage + 12 )
  };

  const nextPage = () => {
    if( pokemons.filter( poke => poke.name.includes( search.toLocaleLowerCase() ) ).length > currentPage + 12 )
      setcurrentPage( currentPage + 12 );
  }

  const previousPage = () => {
    if(currentPage > 0 )
    setcurrentPage( currentPage - 12 );
  }

  const onSearchChange = ({target}: React.ChangeEvent<HTMLInputElement> ) => {
    setcurrentPage(0);
    setSearch(target.value);
  }

  return (
    <>
      <PokeTitle title={ 'Pokemon List' } />
      <input 
            type="text"
            className="mt-3 mb-3 form-control"
            placeholder="Search Pokémon"
            value={ search }
            onChange={ onSearchChange }
        />
      <button className="btn mb-3" onClick={ previousPage } >Previous</button>
      &nbsp;
      <button className="btn mb-3" onClick={ nextPage }>Next</button>
      <PokemonList pokemonList={filterPokemons()} />
      {isLoading && <Loading />}
    </>
  );
};
