import { useEffect, useState } from 'react';
import styles from '../../../styles/card.module.scss';

import data from '../../../data/technologies.json';

interface TypeDatabase {
  name: string;
  image: string;
}

interface Props {
  isAnimation: boolean;
  winner: string | null;
}

export default function DatabasesCard({ isAnimation, winner }: Props) {
  const [selectedDatabase, setSelectedDatabase] = useState<TypeDatabase | null>(null);

  useEffect(() => {
    if (winner && !isAnimation) {
      const databaseOptions = data['Databases'];
      const dbEntries = Object.entries(databaseOptions);
      const randomDBIndex = Math.floor(Math.random() * dbEntries.length);
      const [dbName, dbImage] = dbEntries[randomDBIndex];
      setSelectedDatabase({ name: dbName, image: dbImage as string });
    } else if (isAnimation) {
      setSelectedDatabase(null);
    }
  }, [winner, isAnimation]);

  return (
    <div className={styles.card_secondary}>
      <h3>Databases</h3>
      {selectedDatabase ? (
        <div className={styles.framework}>
          <img
            src={selectedDatabase.image}
            alt={selectedDatabase.name}
            title={selectedDatabase.name}
            width={64}
            height={64}
            loading="lazy"
          />
          <p>{selectedDatabase.name}</p>
        </div>
      ) : (
        <p>Nenhuma tecnologia selecionada</p>
      )}
    </div>
  );
}
