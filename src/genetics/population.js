import evaluate from '@/Board/evaluate';
import check from '@/Board/patterns';
import { crossover, placeStones } from './DNA';

// import { map } from '@/utils/fitness';
// import Scores from '@/const/Scores';
//natural selection

/**
 * @param {array} DNAs
 * @returns {array} matingPools
 */

export const naturalSelection = (_, DNAs = [], fitnesses) => {
  const matingPools = fitnesses.reduce((acc, cur, idx) => {
    return acc.concat(
      Array(cur)
        .fill(0)
        .map((_) => DNAs[idx])
    );
  }, []);

  return matingPools;
};

// returns highest score
export const generateGens = (matingPools = []) => {
  const newDNAs = [];
  const population = matingPools.length;
  const updated = Array(population)
    .fill(0)
    .map((_) => []);

  for (let i = 0; i < population; i++) {
    const idxA = Math.floor(Math.random() * population);
    const idxB = Math.floor(Math.random() * population);
    const dnaA = matingPools[idxA];
    const dnaB = matingPools[idxB];

    const child = crossover(dnaA, dnaB);
    const placed = placeStones(child.DNAs);

    newDNAs.push(placed);

    updated[i].push(placed[placed.length - 1]);
    child.genes.forEach((gene) => {
      updated[i].push(gene);
    });
  }

  return {
    DNAs: newDNAs,
    updated,
  };
};

export const calcFitness = (boards, DNAs = []) => {
  let maxFitness = 0;

  const fitnesses = DNAs.map((dna, idx) => {
    if (!dna.length) return 1;

    // const length = dna.length - 1;
    // find highest score function
    const highestScore = dna.reduce((acc, cur) => {
      const checkedPositions = check(boards[idx], cur);
      const score = evaluate(checkedPositions);

      if (score > acc) return score;
      return acc;
    }, 0);
    // const checked = check(boards[idx], dna[length]);

    // const evaluated = evaluate(checked);
    if (highestScore > maxFitness) maxFitness = highestScore;

    if (highestScore === 100) console.log('omok');
    return highestScore;
  });

  return {
    fitnesses,
    maxFitness,
  };
};
