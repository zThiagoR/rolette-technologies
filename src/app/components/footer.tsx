import styles from '../../styles/page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com <span className={styles.heart}>♥</span> por{' '}
        <a
          className={styles.link}
          href="https://github.com/zThiagoR"
          target="_blank"
          rel="noreferrer"
        >
          Thiago M.
        </a>
      </p>
    </footer>
  );
}
