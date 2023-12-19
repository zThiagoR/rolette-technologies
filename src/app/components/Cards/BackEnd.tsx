import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from "../../../styles/page.module.scss";

import data from "../../../data/technologies.json";

interface TypeFramework {
  name: string;
  image: string;
}

interface props {
  isAnimation: boolean;
  winner: string | null;
}

export default function BackEndCard({ isAnimation, winner }: props) {
  const [selectFramework, setselectFramework] = useState<TypeFramework | null>(null);

  useEffect(() => {
    if (winner) {
      const backEndOptions = data["Back-End"][winner as keyof typeof data["Back-End"]];
      if (backEndOptions) {
        const backEndEntries = Object.entries(backEndOptions);
        const randomBackEndIndex = Math.floor(Math.random() * backEndEntries.length);
        const [backEndName, backEndImage] = backEndEntries[randomBackEndIndex];
        setselectFramework({ name: backEndName, image: backEndImage as string });
      } else {
        setselectFramework(null);
      }
    }
  }, [winner]);

  return (
    <div className={styles.card_secondary}>
      <h3>Back-End</h3>
      {selectFramework && winner ? (
        <div className={`${styles.carousel} ${isAnimation ? styles.animate : ''}`}>
          <Image src={selectFramework.image} alt={selectFramework.name} title={selectFramework.name} width={64} height={64} />
          <p>
            {selectFramework.name}
          </p>
        </div>
      ) : <p>Nenhuma tecnologia selecionada</p>}
    </div>
  );
}
