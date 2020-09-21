import React, { useEffect, useRef } from 'react';
import Board from '@/components/GameBoard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const Main = () => {
  const rootRef = useRef(null);
  const classes = useStyles();

  const handleBoardClick = (x, y) => {
    console.log(x, y);
  };
  return (
    <div className={classes.root} ref={rootRef}>
      <Board onClick={handleBoardClick} />

    </div>
  );
};

export default Main;
