import { Viagem } from "@/types/types";
import Link from "next/link";
import styles from "./CardDestino.module.css";

type Props = {
  viagem: Viagem
}

const CardDestino = ({viagem} : Props) => {
    const { id, imagem, destino, preco, descricao, duracao } = viagem;

    return (
        <div key={id} className={styles.card}>
            <img src={imagem} alt={`Viagem para ${destino}`} className={styles.img}/>
            <div className={styles.content}>
                <h3 className={styles.title}>{destino}</h3>
                <p className={styles.descricao}>{descricao}</p>
                <div className={styles.detailsRow}>
                    <p>Duração: <strong>{duracao}</strong></p>
                    <p className={styles.price}>Preço: {preco}</p>
                </div>
                
                <Link href={`/destinos/${id}`}>
                    <span className={styles.btn_more}>Saiba mais</span>
                </Link>
            </div>
        </div>
    );
}

export default CardDestino;