'use client';

import { useState } from 'react';
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    // 1. Estado para controlar se o menu está aberto/ativo
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <h1>
                <Link href="/">Mais Viagens</Link>
            </h1>
            
            {/* 3. O nav agora usa uma classe dinâmica para aplicar 'active' quando aberto */}
            <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                <Link href="/" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                <Link href="/destinos" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Destinos</Link>
                <Link href="/contato" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Contato</Link>
            </nav>

            {/* 4. Elemento Hamburger - Visível apenas em telas pequenas pelo CSS */}
            <div 
                className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                onClick={toggleMenu} // 5. Adiciona o manipulador de eventos
                aria-label="Toggle navigation" // Boa prática de acessibilidade
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;