import { useEffect, useState } from 'react';
import Image from 'next/image';
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

export default function FrontEndCard({ isAnimation, winner }: Props) {
  const [selectedFramework, setSelectedFramework] = useState<TypeFramework | null>(null);

  useEffect(() => {
    if (winner && !isAnimation) {
      const frameworkOptions = data['Front-End'][winner as keyof typeof data['Front-End']];
      if (frameworkOptions) {
        const frameworkEntries = Object.entries(frameworkOptions);
        const randomFrameworkIndex = Math.floor(Math.random() * frameworkEntries.length);
        const [frameworkName, frameworkImage] = frameworkEntries[randomFrameworkIndex];
        setSelectedFramework({ name: frameworkName, image: frameworkImage as string });
      } else {
        setSelectedFramework(null);
      }
    } else if (isAnimation) {
      setSelectedFramework(null);
    }
  }, [winner, isAnimation]);

  return (
    <div className={styles.card_secondary}>
      <h3>Front-End</h3>
      {selectedFramework ? (
        <div className={styles.framework}>
          <Image
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
