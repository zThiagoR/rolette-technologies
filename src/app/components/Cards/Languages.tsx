import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../../styles/card.module.scss';

import data from '../../../data/technologies.json';

interface TypeLanguage {
  name: string;
  image: string;
}

interface Props {
  isAnimation: boolean;
  winner: string | null;
  onWinner: (winnerName: string) => void;
}

export default function LanguagesCard({ isAnimation, winner, onWinner }: Props) {
  const languageArray: TypeLanguage[] = Object.entries(data.Languages).map(([name, image]) => ({
    name,
    image,
  }));

  useEffect(() => {
    if (isAnimation && !winner) {
      const timer = setTimeout(() => {
        const winningIndex = Math.floor(Math.random() * languageArray.length);
        const winnerLanguage = languageArray[winningIndex];
        onWinner(winnerLanguage.name);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isAnimation, winner, onWinner, languageArray]);

  return (
    <div className={styles.card_main}>
      <h3>Linguagem de Programação:</h3>
      <div className={styles.contentContainer}>
        {winner ? (
          <div className={styles.winner}>
            <Image
              src={languageArray.find((lang) => lang.name === winner)!.image}
              title={winner}
              alt={winner}
              width={64}
              height={64}
              loading="lazy"
            />
            <p>{winner}</p>
          </div>
        ) : (
          <div className={`${styles.carousel} ${isAnimation ? styles.animate : ''}`}>
            {languageArray.map((language, index) => (
              <div key={index} className={styles.carouselItem}>
                <Image
                  src={language.image}
                  alt={language.name}
                  width={64}
                  height={64}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
