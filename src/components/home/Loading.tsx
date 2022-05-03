import { words } from '../../shared/constants/words';

export const Loading = () => {

  const word = words();

  return (
    <div className="alert alert-info" >
    <p> {word.loading} </p>
  </div>
  )
}
