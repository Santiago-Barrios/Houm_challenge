import { pokemonAPI } from '../api/pokemonAPI';
import { FetchAllPokemonResponse, Pokemon, SmallPokemon } from '../interfaces/fetchAllPokemonResponse';


export const fetchAllPokemons = async () : Promise<Pokemon[]> => {

    const resp = await pokemonAPI.get<FetchAllPokemonResponse>('/pokemon?limit=1500');
    const smallPokemenList = resp.data.results;

    return transformSmallPokemonToPokenon( smallPokemenList );

}


const transformSmallPokemonToPokenon = ( smallPokemonList: SmallPokemon[] ) : Pokemon[] => {

    const pokemonArr: Pokemon[] = smallPokemonList.map( pokemon => {

        const pokeArr = pokemon.url.split('/');
        const id = pokeArr[6];
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return {
            id,
            name: pokemon.name,
            pic
        }
    } );

    console.log(pokemonArr);
    return pokemonArr;
}