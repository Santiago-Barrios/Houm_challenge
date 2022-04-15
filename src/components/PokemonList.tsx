import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";
import { Loading } from "./Loading";
import { PokeCard } from "./pokeCard";
import { FC, useState } from 'react';

interface Props {
  pokemonList?: Pokemon[];
}

export const PokemonList: FC<Props> = ({ pokemonList }) => {
  const { isLoading } = usePokemon();

  return (
    <div className="row rows-cols-1 row-cols-md-3 ">
      {pokemonList!.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
      {isLoading && <Loading />}
    </div>
  );
};
