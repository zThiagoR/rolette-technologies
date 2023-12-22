import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from "../../../styles/page.module.scss";

import data from "../../../data/technologies.json";
import { randomSelector } from "@/utils/randomSelector";
import { TypeSelected } from "@/types";

interface props {
  isAnimation: boolean;
  winner: string | null;
}

export default function BackEndCard({ isAnimation, winner }: props) {
  const [selectFramework, setselectFramework] = useState<TypeSelected | null>(null);

  useEffect(() => {
    if (winner) {
      const backEndOptions = data["Back-End"][winner as keyof typeof data["Back-End"]];
      const randomFramework = randomSelector(backEndOptions);
      setselectFramework(randomFramework);
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
