import { FC } from "react";

interface Props {
    title: string;
}

export const PokeTitle: FC< Props > = ({ title }) => {
  return (
    <h1> { title } </h1>
  )
}
