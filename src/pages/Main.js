import React, { useState } from 'react';
import Board from '@/components/GameBoard';
import { makeStyles } from '@material-ui/core/styles';
import { BOARD_SIZE } from '@/const/Game';

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

const Main = () => {
  const classes = useStyles();
  const [board, setBoard] = useState(initBoard);
  const handleBoardClick = (x, y, stoneType) => {
    if (board[y][x] > 0) return;

    const copied = [...board];
    copied[y][x] = stoneType;
    setBoard(copied);
  };
  return (
    <div className={classes.root}>
      <Board onClick={handleBoardClick} board={board} />
    </div>
  );
};

export default Main;
