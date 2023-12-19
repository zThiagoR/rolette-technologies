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

export default function FrontEndCard({ isAnimation, winner }: props) {
  const [selectedFramework, setSelectedFramework] = useState<TypeFramework | null>(null);

  useEffect(() => {
    const frameworkOptions = data["Front-End"][winner as keyof typeof data["Front-End"]];

    if (winner && frameworkOptions) {  
      const frameworkEntries = Object.entries(frameworkOptions);
      const randomFrameworkIndex = Math.floor(Math.random() * frameworkEntries.length);
      const [frameworkName, frameworkImage] = frameworkEntries[randomFrameworkIndex];
      setSelectedFramework({ name: frameworkName, image: frameworkImage as string });
    } else {
      setSelectedFramework(null);
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
