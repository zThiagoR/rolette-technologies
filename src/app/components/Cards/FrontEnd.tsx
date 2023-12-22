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

export default function FrontEndCard({ isAnimation, winner }: props) {
  const [selectedFramework, setSelectedFramework] =
    useState<TypeSelected | null>(null);

  useEffect(() => {
    if (winner) {
      const frameworkOptions = data["Front-End"][winner as keyof (typeof data)["Front-End"]];
      const randomFramework = randomSelector(frameworkOptions);
      setSelectedFramework(randomFramework);
    }
  }, [winner]);

  return (
    <div className={styles.card_secondary}>
      <h3>Front-End</h3>
      {
        selectedFramework ? (
          <div className={`${styles.carousel} ${isAnimation ? styles.animate : ''}`}>
            <Image src={selectedFramework.image} alt={selectedFramework.name} title={selectedFramework.name} width={64} height={64} />
            <p>
              {selectedFramework.name}
            </p>
          </div>
        ) : <p>Nenhuma tecnologia selecionada</p>
      }
    </div>
  );
}
