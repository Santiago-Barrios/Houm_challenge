import { Pokemon } from "../interfaces/fetchAllPokemonResponse";
import { useStyles } from '../shared/styles/useStyles';
import { words } from '../shared/constants/words';

export const PokeCard = (pokemon: Pokemon) => {

  const clases = useStyles();
  const word = words();

  return (
    <div className="col mb-2">
      <div className="card animate__animated animate__fadeIn ">
        <div className="row no-gutters">
          <div className="col-12">
            <img src={pokemon.pic} className="card-img" alt={pokemon.name} />
          </div>
        </div>
        <div className="col-12"  >
          <div className="card-body" style={{ textAlign: "center" }}>
            <p className="card-title" style={ clases.textCard }> { word.name }:</p>
            <p style={ clases.textCard }>
              {" "}
              <strong>{pokemon.name.toUpperCase()}</strong>{" "}
            </p>
            <p className="card-text" style={ clases.textCard }>
              {" "}
              { word.id }: <strong> {pokemon.id} </strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
