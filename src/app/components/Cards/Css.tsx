import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/page.module.scss";
import data from "@/data/technologies.json";
import { randomSelector } from "@/utils/randomSelector";
import { TypeSelected } from "@/types";

interface props {
  isAnimation: boolean;
  winner: string | null;
}

export default function CssCard({ isAnimation, winner }: props) {
  const [selectedCSS, setSelectedCSS] = useState<TypeSelected | null>(null);

  useEffect(() => {
    if (winner) {
      const cssOptions = data["CSS"];
      const randomCSS = randomSelector(cssOptions);
      setSelectedCSS(randomCSS);
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
