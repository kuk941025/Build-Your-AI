import evaluate from '@/Board/evaluate';
import check from '@/Board/patterns';
import { crossover, placeStones } from './DNA';
import Scores from '@/configs/Scores';
import Genetics from '@/configs/Genetics';
// import { map } from '@/utils/fitness';
// import Scores from '@/const/Scores';
//natural selection

/**
 * @param {array} DNAs
 * @returns {array} matingPools
 */

export const naturalSelection = (_, DNAs = [], fitnesses) => {
  const matingPools = fitnesses
    .sort((a, b) => b - a)
    .reduce((acc, cur, idx) => {
      return acc.concat(
        Array(cur)
          .fill(0)
          .map((_) => DNAs[idx])
      );
    }, [])
    .slice(0, Genetics.LIMIT_POPULATION);


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
  let sum = 0;
  let omok = 0;

  const fitnesses = DNAs.map((dna, idx) => {
    if (!dna.length) return 1;

    // highest score equals to a score of dna
    const highestScore = dna.reduce((acc, cur) => {
      const checkedPositions = check(boards[idx], cur);
      const score = evaluate(checkedPositions);

      if (score > acc) return score;
      return acc;
    }, 0);

    if (highestScore > maxFitness) maxFitness = highestScore;

    if (highestScore === Scores.OMOK) omok++;

    sum += highestScore;

    return {
      score: highestScore,
      board: boards[idx],
    };
  });

  return {
    fitnesses: fitnesses.map(f => f.score),
    maxFitness,
    population: DNAs.length,
    avgScore: Math.floor(sum / DNAs.length),
    omok,
    topTen: fitnesses.sort((a, b) => b.score - a.score).slice(0, 10),
  };
};
