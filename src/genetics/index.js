import { initBoards, initDNAs, initFitness } from '@/Board/init';
import { createBoards } from '@/utils/BoardUtils';
import { naturalSelection, generateGens, calcFitness } from '@/genetics/population';
import DefaultGenetics from '@/configs/Genetics';

let boards, DNAs, fitnesses;

export default function run() {
  const matingPools = naturalSelection(boards, DNAs, fitnesses);
  const newGens = generateGens(matingPools);

  boards = createBoards(newGens.DNAs);
  const calculated = calcFitness(boards, newGens.updated);

  DNAs = newGens.DNAs;
  fitnesses = calculated.fitnesses;

  return calculated;
}

export const reset = () => {
  boards = initBoards(DefaultGenetics.INIT_POPULATION);
  DNAs = initDNAs(DefaultGenetics.INIT_POPULATION);
  fitnesses = initFitness(DefaultGenetics.INIT_POPULATION);
};

reset();
