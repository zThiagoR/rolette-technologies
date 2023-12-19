import Link from "next/link";
import styles from "../../styles/page.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com <span className={styles.heart}>♥</span> por <Link className={styles.link} href="https://seuwebsite.com">Thiago M.</Link>
      </p>
    </footer>
  );
}