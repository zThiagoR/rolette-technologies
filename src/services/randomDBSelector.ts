import { dbType } from "@/utils/types";

/* 
Record é utilizado para elementos chave-valor 
https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
*/

export const randomDBSelector = (
  databaseOptions: Record<string, string>
): dbType | null => {
  const sqlEntries = Object.entries(databaseOptions);
  const randomSQLEntry =
    sqlEntries[Math.floor(Math.random() * sqlEntries.length)];
  const payload: dbType = {
    name: randomSQLEntry[0],
    image: randomSQLEntry[1] as string,
  };
  return randomSQLEntry ? payload : null;
};
