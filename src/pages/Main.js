import React, { useState } from 'react';
import Board from '@/components/GameBoard';
import { makeStyles } from '@material-ui/core/styles';
import { BOARD_SIZE } from '@/const/Game';
import { generateData, makeFourFour, makeOmok } from '@/Board/data';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));

const initBoard = new Array(BOARD_SIZE).fill(0).map(() => new Array(BOARD_SIZE).fill(0));
const data = generateData(makeFourFour());
console.log(data);

const Main = () => {
  const classes = useStyles();
  const [boards, setBoards] = useState([
    generateData(makeFourFour()),
    generateData(makeFourFour()),
    generateData(makeFourFour()),
    generateData(makeFourFour()),
    generateData(makeFourFour()),
    generateData(makeFourFour()),
    generateData(makeFourFour()),
    generateData(makeFourFour()),
  ]);
  // const [board, setBoard] = useState(data);
  const handleBoardClick = (idx) => (x, y, stoneType) => {
    const copied = [...boards[idx]];
    copied[y][x] = stoneType;

    setBoards(
      boards.map((board, bIdx) => {
        if (bIdx !== idx) return board;
        else return copied;
      })
    );
  };

  return (
    <div className={classes.root}>
      {boards.map((board, idx) => (
        <Board onClick={handleBoardClick(idx)} key={idx} size={200} board={board} />
      ))}
    </div>
  );
};

export default Main;
