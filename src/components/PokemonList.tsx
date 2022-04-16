import { Pokemon } from "../interfaces/fetchAllPokemonResponse";
import { PokeCard } from "./pokeCard";
import { FC } from "react";

interface Props {
  pokemonList?: Pokemon[];
}

export const PokemonList: FC<Props> = ({ pokemonList }) => {
  return (
    <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1 row-cols-lg-4">
      {pokemonList!.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
};
