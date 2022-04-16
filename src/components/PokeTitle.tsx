import { FC } from "react";
import { useStyles } from "../shared/styles/useStyles";

interface Props {
  title: string;
}

export const PokeTitle: FC<Props> = ({ title }) => {
  const clases = useStyles();

  return (
    <>
      <h1 style={clases.title}> {title} </h1>
      <hr style={clases.titleLine} />
    </>
  );
};
