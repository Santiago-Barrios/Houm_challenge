import { Pokemon } from "../interfaces/fetchAllPokemonResponse";
import { useStyles } from '../shared/styles/useStyles';

export const PokeCard = (pokemon: Pokemon) => {

  const clases = useStyles();

  return (
    <div className="col mb-2">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-12">
            <img src={pokemon.pic} className="card-img" alt={pokemon.name} />
          </div>
        </div>
        <div className="col-12"  >
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-title" style={ clases.textCard }> Name:</p>
            <p style={ clases.textCard }>
              {" "}
              <strong>{pokemon.name.toUpperCase()}</strong>{" "}
            </p>
            <p className="card-text" style={ clases.textCard }>
              {" "}
              id: <strong> {pokemon.id} </strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
