import React from 'react';
import { randomPlace, createBoards } from '@/utils/BoardUtils';
import { initBoards, initDNAs, initFitness } from '@/Board/init';
import { BLACK_STONE } from '@/const/Game';
import Button from '@material-ui/core/Button';
import check from '@/Board/patterns';
import evaluate from '@/Board/evaluate';
import { naturalSelection, generateGens, calcFitness } from '@/genetics/population';

let boards = initBoards(10);
let DNAs = initDNAs(10);
let fitnesses = initFitness(10);
let gen = 1;
const handleClick = () => {
  

  console.log(gen++);
  // placeStone();
  // evaluateBoard();
  const matingPools = naturalSelection(boards, DNAs, fitnesses);
  const newGens = generateGens(matingPools);

  boards = createBoards(newGens.DNAs);
  const calculated = calcFitness(boards, newGens.updated);

  // if there exist fitness === 100, exit.
  DNAs = newGens.DNAs;
  fitnesses = calculated.fitnesses;

  console.log(calculated.maxFitness);
};

const evaluateBoard = () => {
  boards.forEach((board, idx) => {
    const length = DNAs[idx].length - 1;
    const result = check(board, DNAs[idx][length]);

    evaluate(result);
  });
};
const placeStone = () => {
  boards = boards.map((board, idx) => {
    const { x, y } = randomPlace(board);

    DNAs[idx].push({ x, y, stone: BLACK_STONE });
    board[y][x] = BLACK_STONE;
    return board;
  });
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
