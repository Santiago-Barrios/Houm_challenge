import { Pokemon } from "../interfaces/fetchAllPokemonResponse";
import { PokeCard } from "./pokeCard";
import { FC } from 'react';

interface Props {
  pokemonList?: Pokemon[];
}

export const PokemonList: FC<Props> = ({ pokemonList }) => {

  return (
    <div className="row rows-cols-1 row-cols-md-3 ">
      {pokemonList!.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
};
