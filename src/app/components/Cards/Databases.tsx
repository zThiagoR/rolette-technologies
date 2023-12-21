import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/styles/page.module.scss";
import data from "@/data/technologies.json";
import { randomDBSelector } from "@/services/randomDBSelector";
import { dbType } from "@/utils/types";

type dbCardProps = {
  isAnimation: boolean;
  winner: string | null;
};

export default function DatabasesCard({ isAnimation, winner }: dbCardProps) {
  const [selectedDB, setSelectedDB] = useState<dbType | null>(null);

  useEffect(() => {
    if (winner) {
      const dbOptions = data["Databases"];
      const selectedDB = dbOptions ? randomDBSelector(dbOptions) : null;
      setSelectedDB(selectedDB);
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
