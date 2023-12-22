import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/page.module.scss";
import data from "@/data/technologies.json";
import { randomSelector } from "@/utils/randomSelector";
import { TypeSelected } from "@/types";

type dbCardProps = {
  isAnimation: boolean;
  winner: string | null;
};

export default function DatabasesCard({ isAnimation, winner }: dbCardProps) {
  const [selectedDB, setSelectedDB] = useState<TypeSelected | null>(null);

  useEffect(() => {
    if (winner) {
      const dbOptions = data["Databases"];
      const randomDB = randomSelector(dbOptions);
      setSelectedDB(randomDB);
    }
  }, [winner]);

  return (
    <div className={styles.card_secondary}>
      <h3>Databases</h3>
      {selectedDB && winner ? (
        <div
          className={`${styles.carousel} ${isAnimation ? styles.animate : ""}`}
        >
          <Image
            src={selectedDB.image}
            alt={selectedDB.name}
            title={selectedDB.name}
            width={64}
            height={64}
          />
          <p>{selectedDB.name}</p>
        </div>
      ) : (
        <p>Nenhuma tecnologia selecionada</p>
      )}
    </div>
  );
}
