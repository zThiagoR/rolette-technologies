import { useEffect, useState } from 'react';
import styles from '../../../styles/card.module.scss';

import data from '../../../data/technologies.json';

interface TypeCSS {
  name: string;
  image: string;
}

interface Props {
  isAnimation: boolean;
  winner: string | null;
}

export default function CssCard({ isAnimation, winner }: Props) {
  const [selectedCSS, setSelectedCSS] = useState<TypeCSS | null>(null);

  useEffect(() => {
    if (winner && !isAnimation) {
      const frontEndOptions = data['Front-End'][winner as keyof typeof data['Front-End']];
      const hasFrontEndForWinner = frontEndOptions && Object.keys(frontEndOptions).length > 0;

      if (!hasFrontEndForWinner) {
        setSelectedCSS(null);
        return;
      }

      const cssEntries = Object.entries(data['CSS']);
      const randomCSSIndex = Math.floor(Math.random() * cssEntries.length);
      const [cssName, cssImage] = cssEntries[randomCSSIndex];
      setSelectedCSS({ name: cssName, image: cssImage as string });
    } else if (isAnimation) {
      setSelectedCSS(null);
    }
  }, [winner, isAnimation]);

  return (
    <div className={styles.card_secondary}>
      <h3>CSS</h3>
      {selectedCSS ? (
        <div className={styles.framework}>
          <img
            src={selectedCSS.image}
            alt={selectedCSS.name}
            title={selectedCSS.name}
            width={64}
            height={64}
            loading="lazy"
          />
          <p>{selectedCSS.name}</p>
        </div>
      ) : (
        <p>Nenhuma tecnologia selecionada</p>
      )}
    </div>
  );
}
