import { initBoards, initDNAs, initFitness } from '@/Board/init';
import { createBoards } from '@/utils/BoardUtils';
import { naturalSelection, generateGens, calcFitness } from '@/genetics/population';
import DefaultGenetics from '@/configs/Genetics';

let boards = initBoards(DefaultGenetics.INIT_POPULATION);
let DNAs = initDNAs(DefaultGenetics.INIT_POPULATION);
let fitnesses = initFitness(DefaultGenetics.INIT_POPULATION);

export default function run () {
  const matingPools = naturalSelection(boards, DNAs, fitnesses);
  const newGens = generateGens(matingPools);

  boards = createBoards(newGens.DNAs);
  const calculated = calcFitness(boards, newGens.updated);


  DNAs = newGens.DNAs;
  fitnesses = calculated.fitnesses;

  return calculated;
}