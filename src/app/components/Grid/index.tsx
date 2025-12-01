import { Viagem } from "@/types/types";
import Card from "../CardDestino";
import styles from "./Grid.module.css";

type Props = {
  viagens: Viagem[]
}

const Grid = ({viagens} : Props) => {
  return (
    <section className={styles.grid}>
      {viagens.map((viagem) => <Card key={viagem.id} viagem={viagem} />)}
    </section>
  );
}

export default Grid;