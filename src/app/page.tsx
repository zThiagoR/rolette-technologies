'use client';

import { useState } from 'react'
import styles from '../styles/page.module.scss'

import LanguagesCard from './components/Cards/Languages';
import FrontEndCard from './components/Cards/FrontEnd';
import BackEndCard from './components/Cards/BackEnd';
import DatabasesCard from './components/Cards/Databases';
import CssCard from './components/Cards/Css';
import Footer from './components/footer';

export default function Home() {
  const [animation, setAnimation] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)

  const handleWinner = (winnerName: string) => {
    setWinner(winnerName);
    setAnimation(false);
  };
  
  const handleRoulette = () => {
    setWinner(null); 
    setAnimation(true);
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Quais tecnologias devo usar no próximo projeto?</h1>

        <button onClick={handleRoulette} className={styles.button} disabled={animation}>
          {
            animation ? 'Sorteando...' : winner ? 'Sortear novamente' : 'Sortear'
          }
        </button>

        <LanguagesCard
          isAnimation={animation}
          onWinner={handleWinner}
          winner={winner} />

        <div className={styles.cards_row}>
          <FrontEndCard
            isAnimation={animation}
            winner={winner} />

          <CssCard
            isAnimation={animation}
            winner={winner} />

          <BackEndCard
            isAnimation={animation}
            winner={winner} />

          <DatabasesCard
            isAnimation={animation}
            winner={winner} />
        </div>
      </main>

      <Footer />
    </>
  )
}
