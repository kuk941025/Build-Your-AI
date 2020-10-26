import React from 'react';
import { createBoards } from '@/utils/BoardUtils';
import { initBoards, initDNAs, initFitness } from '@/Board/init';
import Button from '@material-ui/core/Button';
import { naturalSelection, generateGens, calcFitness } from '@/genetics/population';

let boards = initBoards(10);
let DNAs = initDNAs(10);
let fitnesses = initFitness(10);
let gen = 1;
const handleClick = () => {
  console.log(gen++);

  const matingPools = naturalSelection(boards, DNAs, fitnesses);
  const newGens = generateGens(matingPools);

  boards = createBoards(newGens.DNAs);
  const calculated = calcFitness(boards, newGens.updated);

  // if there exist fitness === 100, exit.
  DNAs = newGens.DNAs;
  fitnesses = calculated.fitnesses;

  console.log(calculated.maxFitness);
};

const Practice = () => {
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
};

export default Practice;
