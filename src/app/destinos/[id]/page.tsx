'use client';

import { useParams } from 'next/navigation';
import { Viagem } from '@/types/types'; 
import { viagens } from '@/lib/viagens';
import styles from './DestinoPage.module.css';

export default function DestinoPage() {
    const params = useParams();
    
    const idDaRota = params.id as string;
    const idNumerico = parseInt(idDaRota);

    const viagem: Viagem | undefined = viagens.find(v => v.id === idNumerico);

    // --- Caso: Destino Não Encontrado ---
    if (!viagem) {
        return (
            <div className={styles.containerNotFound}>
                <h1>😔 Destino Não Encontrado</h1>
                <p>Essa é uma viagem que ficará para os sonhos e infelizmente não foi encontrada.</p>
            </div>
        );
    }

    // --- Caso: Destino Encontrado ---
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>✨ Detalhes da Viagem: {viagem.destino}</h1>
            
            <img 
                src={viagem.imagem} 
                alt={`Imagem de ${viagem.destino}`} 
                className={styles.image}
            />
            
            <div className={styles.details}>
                <p className={styles.detailItem}><b>Descrição:</b> {viagem.descricao}</p>
                <p className={styles.detailItem}><b>Duração:</b> {viagem.duracao}</p>
                <h2 className={styles.price}><b>Preço:</b> {viagem.preco}</h2>
            </div>
        </div>
    );
}