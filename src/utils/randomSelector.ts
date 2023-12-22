import { TypeSelected } from "@/types/index";

export const randomSelector = (
  Options: Record<string, string>
): TypeSelected | null => {
  if (!Options) {
    return null;
  }

  const Entries = Object.entries(Options);
  if (Entries.length === 0) {
    return null;
  }

  const randomEntry = Entries[Math.floor(Math.random() * Entries.length)];
  const payload: TypeSelected = {
    name: randomEntry[0],
    image: randomEntry[1],
  };

  return payload;
};
