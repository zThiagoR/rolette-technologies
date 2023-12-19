import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from "../../../styles/page.module.scss";

import data from "../../../data/technologies.json";

interface TypeSQL {
  name: string;
  image: string;
}

interface SQLCardProps {
  isAnimation: boolean;
  winner: string | null;
}

export default function DatabasesCard({ isAnimation, winner }: SQLCardProps) {
  const [selectedSQL, setSelectedSQL] = useState<TypeSQL | null>(null);

  useEffect(() => {
    if (winner) {
      const databaseOptions = data["Databases"];
      if (databaseOptions) {
        const sqlEntries = Object.entries(databaseOptions);
        const randomSQLEntry = sqlEntries[Math.floor(Math.random() * sqlEntries.length)];
        setSelectedSQL({ name: randomSQLEntry[0], image: randomSQLEntry[1] as string });
      } else {
        setSelectedSQL(null);
      }
    }
  }, [winner]);

  return (
    <div className={styles.card_secondary}>
      <h3>Databases</h3>
      {selectedSQL && winner ? (
        <div className={`${styles.carousel} ${isAnimation ? styles.animate : ''}`}>
          <Image src={selectedSQL.image} alt={selectedSQL.name} title={selectedSQL.name} width={64} height={64} />
          <p>
            {selectedSQL.name}
          </p>
        </div>
      ) : <p>Nenhuma tecnologia selecionada</p>}
    </div>
  );
}