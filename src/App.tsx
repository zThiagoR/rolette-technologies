import { useState } from 'react';
import styles from './styles/page.module.scss';

import LanguagesCard from './app/components/Cards/Languages';
import FrontEndCard from './app/components/Cards/FrontEnd';
import BackEndCard from './app/components/Cards/BackEnd';
import DatabasesCard from './app/components/Cards/Databases';
import CssCard from './app/components/Cards/Css';
import Footer from './app/components/footer';

export default function App() {
  const [animation, setAnimation] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const handleWinner = (winnerName: string) => {
    setWinner(winnerName);
    setAnimation(false);
  };

  const handleRoulette = () => {
    setWinner(null);
    setAnimation(true);
  };

  return (
    <div className={styles.appShell}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.kicker}>Roleta de Tecnologias</p>
          <h1 className={styles.title}>Qual tecnologia devo usar no meu próximo projeto?</h1>
          <p className={styles.subtitle}>
            Use para decidir mais rápido ou brincar com combinações inesperadas.
          </p>
        </div>

        <button onClick={handleRoulette} className={styles.spinButton} disabled={animation} type="button">
          {animation ? 'Sorteando...' : winner ? 'Sortear novamente' : 'Sortear'}
        </button>

        <section className={styles.primaryCard}>
          <LanguagesCard isAnimation={animation} onWinner={handleWinner} winner={winner} />
        </section>

        <div className={styles.cards_row}>
          <FrontEndCard isAnimation={animation} winner={winner} />
          <CssCard isAnimation={animation} winner={winner} />
          <BackEndCard isAnimation={animation} winner={winner} />
          <DatabasesCard isAnimation={animation} winner={winner} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
