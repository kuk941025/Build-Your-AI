import React from 'react';
import { initBoardData, randomPlace } from '@/utils/BoardUtils';
import { BLACK_STONE } from '@/const/Game';
import Button from '@material-ui/core/Button';
import check from '@/Board/patterns';
import evaluate from '@/Board/evaluate';

let boards = [];
let lastPlaced = [];

//init Boards
Array(10)
  .fill(0)
  .forEach((_) => boards.push(initBoardData()));

const handleClick = () => {
  placeStone();
  evaluateBoard()
};

const evaluateBoard = () => {
  boards.forEach((board, idx) => {
    const result = check(board, lastPlaced[idx]);
    console.log(board);
    console.log(evaluate(result));
  })
}
const placeStone = () => {
  lastPlaced = [];
  boards = boards.map((board) => {
    const { x, y } = randomPlace(board);

    lastPlaced.push({ x, y, stone: BLACK_STONE });
    board[y][x] = BLACK_STONE;
    return board;
  });
};

const test = (setFunc) => {
  setFunc(false);
};
const Practice = () => {
  return (
    <div>
      <Button variant="contained" onClick={() => test(handleClick)}>
        Click
      </Button>
    </div>
  );
};

export default Practice;
