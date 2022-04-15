import { colors } from '../constants/colors';

export const useStyles = () => {

    const color = colors();

  return ({
    colorOrange: {
        color: color.paletteHoum.darkOrange
    }
  } )
}
