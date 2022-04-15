import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

export const PokeCard = (pokemon: Pokemon) => {
  return (
    <div className="col mb-2">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-8">
            <img src={pokemon.pic} className="card-img" alt={pokemon.name} />
          </div>
      
          <div className="col-4">
            <div className="card-body">
              <p className="card-title"> name:</p>
              <p> <strong>{pokemon.name}</strong> </p>
              <p className="card-text"> id: <strong> {pokemon.id} </strong> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
