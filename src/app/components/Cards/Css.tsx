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

export default function CssCard({ isAnimation, winner }: props) {
  const [selectedCSS, setSelectedCSS] = useState<TypeFramework | null>(null);

  useEffect(() => {
    if (winner) {
      const cssEntries = Object.entries(data["CSS"]);
      const randomCSSIndex = Math.floor(Math.random() * cssEntries.length);
      const [cssName, cssImage] = cssEntries[randomCSSIndex];
      setSelectedCSS({ name: cssName, image: cssImage as string });
    } else {
      setSelectedCSS(null);
    }
  }, [winner]);

  return (
    <div className={styles.card_secondary}>
      <h4>CSS</h4>
      {
        selectedCSS && winner ? (
          <div className={`${styles.carousel} ${isAnimation ? styles.animate : ''}`}>
            <Image src={selectedCSS.image} alt={selectedCSS.name} title={selectedCSS.name} width={64} height={64} />
            <p>
              {selectedCSS.name}
            </p>
          </div>
        ) : 
        <p>Nenhuma tecnologia selecionada</p>
      }
    </div>
  );
}
