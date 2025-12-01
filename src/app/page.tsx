import Link from "next/link";
import Title from "./components/Title";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Title title="Bem-vindo ao Mais Viagens!" />
      <div className={styles.intro}>
        <img src="https://placehold.co/1820x500?text=Mais+Viagens" alt="Imagem inicial da página" className={styles.img} />
        <p className={styles.descricao}>Descubra os melhores destinos de viagem com Mais Viagens. Explore pacotes exclusivos, hospedagens incríveis e experiências inesquecíveis ao redor do mundo.</p>
        <Link href="/destinos">
          <span className={styles.destinosBtn}>Veja nossos destinos</span>
        </Link>
      </div>
    </main>
  );
}