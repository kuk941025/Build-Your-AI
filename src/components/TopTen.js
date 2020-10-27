import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Board from '@/components/GameBoard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px 0px`,
  },
  title: {
    fontWeight: 'bold',
  },
  boardWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));
const TopTen = ({ data = [] }) => {
  const classes = useStyles();

  if (!data.length) return null;
  return (
    <div className={classes.root}>
      <Typography gutterBottom className={classes.title} variant="h6">
        Top Ten
      </Typography>

      <Typography gutterBottom variant="body1">
        {data.map((item) => item.score).join(', ')}
      </Typography>

      <div className={classes.boardWrapper}>
        {data.map((item, idx) => (
          <Board key={idx} size={300} board={item.board} />
        ))}
      </div>
    </div>
  );
};
export default TopTen;
