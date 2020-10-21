import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Board from '@/components/GameBoard';
import { makeStyles } from '@material-ui/core/styles';
import { tempData } from '@/Board/data';
import { check } from '@/Board/patterns';

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

const Main = () => {
  const classes = useStyles();
  const [board, setBoard] = useState(tempData);
  const [lastClicked, setClicked] = useState({ x: 0, y: 0, stone: 0 });
  // const [board, setBoard] = useState(data);
  // const handleBoardClick = (idx) => (x, y, stoneType) => {
  //   const copied = [...boards[idx]];
  //   copied[y][x] = stoneType;

  //   setBoards(
  //     boards.map((board, bIdx) => {
  //       if (bIdx !== idx) return board;
  //       else return copied;
  //     })
  //   );
  // };

  const handleBoardClick = (x, y, stoneType) => {
    const copied = [...board];
    copied[y][x] = 1;

    setBoard(copied);
    setClicked({ x, y, stone: 1 });
  };

  const handleShowStats = () => {
    console.log(check(board, lastClicked));
  };
  return (
    <div className={classes.root}>
      {/* {boards.map((board, idx) => (
        <Board onClick={handleBoardClick(idx)} key={idx} size={200} board={board} />
      ))} */}
      <Board onClick={handleBoardClick} size={600} board={board} />
      <Button onClick={handleShowStats} variant="contained" color="primary">
        Show
      </Button>
    </div>
  );
};

export default Main;
