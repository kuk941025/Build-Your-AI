import { initBoards, initDNAs, initFitness } from '@/Board/init';
import { createBoards } from '@/utils/BoardUtils';
import { naturalSelection, generateGens, calcFitness } from '@/genetics/population';

let boards = initBoards(10);
let DNAs = initDNAs(10);
let fitnesses = initFitness(10);

export default function run () {
  const matingPools = naturalSelection(boards, DNAs, fitnesses);
  const newGens = generateGens(matingPools);

  boards = createBoards(newGens.DNAs);
  const calculated = calcFitness(boards, newGens.updated);


  DNAs = newGens.DNAs;
  fitnesses = calculated.fitnesses;

  return calculated;
}