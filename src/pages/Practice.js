import React from 'react';
import { randomPlace } from '@/utils/BoardUtils';
import { initBoards, initDNAs } from '@/Board/init';
import { BLACK_STONE } from '@/const/Game';
import Button from '@material-ui/core/Button';
import check from '@/Board/patterns';
import evaluate from '@/Board/evaluate';

let boards = initBoards(10);
let DNAs = initDNAs(10);

const handleClick = () => {
  let gen = 1;

  console.log(gen++);
  placeStone();
  evaluateBoard();
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
