import { BLACK_STONE, BOARD_SIZE } from '@/const/Game';
import DefaultGenetics from '@/configs/Genetics';

export const crossover = (dnaA, dnaB) => {
  const rndIdx = Math.floor(Math.random() * dnaA.length);
  const newDNA = dnaA.map((_, idx) => {
    if (idx < rndIdx) return dnaA[idx];
    return dnaB[idx];
  });

  return mutate(newDNA);
};

const mutate = (DNAs, rate = DefaultGenetics.MUTATION_RATE) => {
  const genes = [];

  const mutatedDNAs = DNAs.map((dna) => {
    if (Math.random() < rate) {
      const rndCoords = placeRandom(DNAs);
      genes.push({ ...rndCoords, stone: BLACK_STONE });

      return {
        ...rndCoords,
        stone: BLACK_STONE,
      };
    }
    return dna;
  });

  return {
    DNAs: mutatedDNAs,
    genes,
  };
};

export const placeStones = (DNAs) => {
  if (DNAs.length >= DefaultGenetics.MAX_DNA_SIZE) return DNAs;
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
