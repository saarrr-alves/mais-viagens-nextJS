import styles from './Contato.module.css';

const Contato = () => {
  return (
    // Aplicação dos estilos via CSS Modules (styles.nomeDaClasse)
    <section className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Entre em Contato</h1>

      {/* Seção de Informações de Contato Direto */}
      <div className={styles.contactInfoSection}>
        <h2 className={styles.infoTitle}>Informações de Contato Direto</h2>
        <div className={styles.infoList}>
          <p className={styles.contactItem}>
            <strong>📧 E-mail:</strong>{' '}
            <a href="mailto:contato@maisviagens.com">contato@maisviagens.com</a>
          </p>
          <p className={styles.contactItem}>
            <strong>📞 Telefone:</strong>{' '}
            <a href="tel:+551112345678">(11) 1234-5678</a>
          </p>
          <p className={styles.contactItem}>
            <strong>📍 Endereço:</strong> Rua das Viagens, 123, São Paulo, SP
          </p>
        </div>
      </div>

      {/* Separador e Chamada para o Formulário */}
      <div className={styles.formCallToAction}>
        <p>Ou, se preferir...</p>
        <h2 className={styles.formTitle}>Envie-nos uma Mensagem</h2>
      </div>

      {/* Seção do Formulário */}
      <form className={styles.contactForm}>
        {/* Campo Nome */}
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Seu nome completo"
            className={styles.formInput} // Classe opcional para estilizar inputs
          />
        </div>

        {/* Campo Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="seu.email@exemplo.com"
            className={styles.formInput}
          />
        </div>

        {/* Campo Mensagem */}
        <div className={styles.formGroup}>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            placeholder="Escreva sua mensagem aqui..."
            className={styles.formTextarea} // Classe separada para estilizar o textarea
          ></textarea>
        </div>

        {/* Botão de Envio */}
        <button type="submit" className={styles.submitButton}>
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

export default Contato;