import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from "../../../styles/page.module.scss";

import data from "../../../data/technologies.json";

interface TypeLanguage {
  name: string;
  image: string;
}

interface props {
  isAnimation: boolean;
  winner: string | null;
  onWinner: (winnerName: string) => void;
}

export default function LanguagesCard({ isAnimation, winner, onWinner  }: props) {
  const languageArray: TypeLanguage[] = Object.entries(data.Languages).map(([name, image]) => ({
    name,
    image
  }));

  useEffect(() => {
    if (isAnimation && !winner) {
      const timer = setTimeout(() => {
        const winningIndex = Math.floor(Math.random() * languageArray.length);
        const winner = languageArray[winningIndex];
        onWinner(winner.name);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [isAnimation, winner, onWinner, languageArray]);

  return (
    <div className={styles.card_main}>
      <h3>Linguagem de Programação:</h3>
      <div className={`${styles.carousel} ${isAnimation ? styles.animate : ''}`}>
        {winner ? (
          <div className={styles.winner}>
            <Image src={languageArray.find(lang => lang.name === winner)!.image} title={winner} alt={winner} width={64} height={64} />
            <p>
              {winner}
            </p>
          </div>
        ) : (
          languageArray.map((language, index) => (
            <Image key={index} src={language.image} alt={language.name} width={64} height={64} />
          ))
        )}
      </div>
    </div>
  );
}
