import { BLACK_STONE, BOARD_SIZE } from '@/const/Game';

export const crossover = (dnaA, dnaB) => {
  const rndIdx = Math.floor(Math.random() * dnaA.length);
  const newDNA = dnaA.map((_, idx) => {
    if (idx < rndIdx) return dnaA[idx];
    return dnaB[idx];
  });

  return mutate(newDNA);
};

export const mutate = (DNAs, rate = 0.05) => {
  return DNAs.map((dna) => {
    if (Math.random() < rate)
      return {
        ...placeRandom(DNAs),
        stone: BLACK_STONE,
      };
    return dna;
  });
};

export const placeStones = (DNAs) => {
  return DNAs.concat({
    ...placeRandom(DNAs),
    stone: BLACK_STONE,
  });
};

const placeRandom = (DNAs) => {
  while (true) {
    const rnd_x = Math.floor(Math.random() * BOARD_SIZE);
    const rnd_y = Math.floor(Math.random() * BOARD_SIZE);

    if (!DNAs.find((dna) => dna.x === rnd_x && dna.y === rnd_y))
      return {
        x: rnd_x,
        y: rnd_y,
      };
  }
};
