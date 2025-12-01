import Title from "../components/Title"
import { viagens } from "@/lib/viagens";
import Grid from "../components/Grid";
import styles from "./DestinosPage.module.css"

const DestinosPage = () => {
  return (
    <div className={styles.content}>
        <Title title="Nosso Melhores Destinos" />
        <Grid viagens={viagens} />
    </div>
  )
}

export default DestinosPage;