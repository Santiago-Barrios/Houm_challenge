import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

export const PokeCard = (pokemon: Pokemon) => {
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={pokemon.pic} className="card-img" alt={pokemon.name} />
          </div>
      
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title"> {pokemon.name} </h5>
              <p className="card-text"> {pokemon.id} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
