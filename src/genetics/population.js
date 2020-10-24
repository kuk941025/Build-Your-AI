import evaluate from '@/Board/evaluate';
import check from '@/Board/patterns';
import { crossover, mutate, placeStones } from './DNA';

// import { map } from '@/utils/fitness';
// import Scores from '@/const/Scores';
//natural selection

/**
 * @param {array} DNAs
 * @returns {array} matingPools
 */

export const naturalSelection = (boards, DNAs = []) => {
  const { fitnesses = [] } = addFitness(boards, DNAs);

  const matingPools = fitnesses.reduce((acc, cur, idx) => {
    // const mappedFitness = map(cur, 0, maxFitness, 0, Scores.OMOK);

    return acc.concat(
      Array(cur)
        .fill(0)
        .map((_) => DNAs[idx])
    );
  }, []);

  return matingPools;
};

export const generateGens = (matingPools = []) => {
  const newDNAs = [];
  const population = matingPools.length;

  for (let i = 0; i < population; i++) {
    const idxA = Math.floor(Math.random() * population);
    const idxB = Math.floor(Math.random() * population);
    const dnaA = matingPools[idxA];
    const dnaB = matingPools[idxB];

    const child = placeStones(mutate(crossover(dnaA, dnaB)));
    newDNAs.push(child);
  }

  return newDNAs;
};

const addFitness = (boards, DNAs = []) => {
  let maxFitness = 0;
  console.log(boards);
  const fitnesses = DNAs.map((dna, idx) => {
    if (!dna.length) return 1;

    const length = dna.length - 1;
    const checked = check(boards[idx], dna[length]);

    const evaluated = evaluate(checked);
    if (evaluated > maxFitness) maxFitness = evaluated;

    if (evaluated === 100) console.log('omok');
    return evaluated;
  });

  return {
    fitnesses,
    maxFitness,
  };
};
