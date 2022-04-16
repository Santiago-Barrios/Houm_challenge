import { colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

export const useStyles = () => {
  const color = colors();

  return {
    title: {
      color: color.paletteHoum.darkOrange,
      fontSize: "5rem",
      textAlign: "center" as const,
      fontFamily: "Poppins",
      fontWeight: Fonts.BOLD,
      textShadow: "-1px -1px white, 1px 1px #333",
    },
    titleLine: {
      color: "black"
    },
    textCard: {
      margin: "0",
      fontSize: "1.5rem",
      background: color.paletteHoum.peach,
      color: color.paletteHoum.ligthnessOrange,
    },
    button: {
      background: color.paletteHoum.darkOrange,
      width: "7rem",
      color: color.paletteHoum.white
    },
  };
};
