import { useEffect, useState } from 'react';
import styles from '../../../styles/card.module.scss';

import data from '../../../data/technologies.json';

interface TypeFramework {
  name: string;
  image: string;
}

interface Props {
  isAnimation: boolean;
  winner: string | null;
}

export default function BackEndCard({ isAnimation, winner }: Props) {
  const [selectedFramework, setSelectedFramework] = useState<TypeFramework | null>(null);

  useEffect(() => {
    if (winner && !isAnimation) {
      const backEndOptions = data['Back-End'][winner as keyof typeof data['Back-End']];
      if (backEndOptions) {
        const backEndEntries = Object.entries(backEndOptions);
        const randomBackEndIndex = Math.floor(Math.random() * backEndEntries.length);
        const [backEndName, backEndImage] = backEndEntries[randomBackEndIndex];
        setSelectedFramework({ name: backEndName, image: backEndImage as string });
      } else {
        setSelectedFramework(null);
      }
    } else if (isAnimation) {
      setSelectedFramework(null);
    }
  }, [winner, isAnimation]);

  return (
    <div className={styles.card_secondary}>
      <h3>Back-End</h3>
      {selectedFramework ? (
        <div className={styles.framework}>
          <img
            src={selectedFramework.image}
            alt={selectedFramework.name}
            title={selectedFramework.name}
            width={64}
            height={64}
            loading="lazy"
          />
          <p>{selectedFramework.name}</p>
        </div>
      ) : (
        <p>Nenhuma tecnologia selecionada</p>
      )}
    </div>
  );
}
