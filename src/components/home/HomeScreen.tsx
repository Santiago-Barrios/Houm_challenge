import { useState } from "react";
import { Loading } from "./Loading";
import { PokemonList } from "./PokemonList";
import { usePokemon } from "../../hooks/usePokemon";
import { Pokemon } from "../../interfaces/fetchAllPokemonResponse";
import { useStyles } from "../../shared/styles/useStyles";
import { words } from "../../shared/constants/words";

export const HomeScreen = () => {
  const { isLoading, pokemons } = usePokemon();
  const [currentPage, setcurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const numberPokemonsToShow: number = 12;

  const clases = useStyles();
  const word = words();

  const filterBySearch = () => {
    const filtered = pokemons.filter((poke) =>
      poke.name.includes(search.toLocaleLowerCase())
    );
    return filtered;
  };

  const filterPokemons = (): Pokemon[] => {
    if (search.length === 0)
      return pokemons.slice(currentPage, currentPage + numberPokemonsToShow);

    // search pokemon
    const filtered = filterBySearch();
    return filtered.slice(currentPage, currentPage + numberPokemonsToShow);
  };

  const nextPage = () => {
    if (filterBySearch().length > currentPage + numberPokemonsToShow)
      setcurrentPage(currentPage + numberPokemonsToShow);
  };

  const previousPage = () => {
    if (currentPage > 0) setcurrentPage(currentPage - numberPokemonsToShow);
  };

  const onSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setcurrentPage(0);
    setSearch(target.value);
  };

  return (
    <>
      {/* <PokeTitle title={word.title} /> */}
      <input
        type="text"
        className="mt-3 mb-3 form-control"
        placeholder="Search Pokémon"
        value={search}
        onChange={onSearchChange}
      />
      <button className="btn mb-3" style={clases.button} onClick={previousPage}>
        {word.previous}
      </button>
      &nbsp;
      <button className="btn mb-3" style={clases.button} onClick={nextPage}>
        {word.next}
      </button>
      <PokemonList pokemonList={filterPokemons()} />
      {isLoading && <Loading />}
    </>
  );
};
