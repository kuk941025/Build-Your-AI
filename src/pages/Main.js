import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Board from '@/components/GameBoard';
import { makeStyles } from '@material-ui/core/styles';
import { tempData } from '@/Board/data';
import check from '@/Board/patterns';
import evaluate from '@/Board/evaluate';

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


  const handleBoardClick = (x, y, stoneType) => {
    const copied = [...board];
    copied[y][x] = 1;

    setBoard(copied);
    setClicked({ x, y, stone: 1 });
  };

  const handleShowStats = () => {
    const results = check(board, lastClicked);
    const evaluated = evaluate(results);

    console.log(evaluated);
  };
  return (
    <div className={classes.root}>
      <Board onClick={handleBoardClick} size={600} board={board} />
      <Button onClick={handleShowStats} variant="contained" color="primary">
        Show
      </Button>
    </div>
  );
};

export default Main;
