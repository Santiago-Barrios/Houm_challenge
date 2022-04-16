import { pokemonAPI } from "../api/pokemonAPI";
import {
  FetchAllPokemonResponse,
  Pokemon,
  SmallPokemon,
} from "../interfaces/fetchAllPokemonResponse";
import { api } from "../shared/constants/api";

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  const numberFetchPokemons: number = 1500;

  const resp = await pokemonAPI.get<FetchAllPokemonResponse>(
    `/pokemon?limit=${numberFetchPokemons}`
  );
  const smallPokemenList = resp.data.results;

  return transformSmallPokemonToPokenon(smallPokemenList);
};

const transformSmallPokemonToPokenon = (
  smallPokemonList: SmallPokemon[]
): Pokemon[] => {
  const pokemonArr: Pokemon[] = smallPokemonList.map((pokemon) => {
    const pokeArr = pokemon.url.split("/");
    const id = pokeArr[6];
    const pic = `${api().url.picBase}/${id}.png`;

    return {
      id,
      name: pokemon.name,
      pic,
    };
  });

  return pokemonArr;
};
