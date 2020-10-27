import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px 0px`,
  },
  title: {
    fontWeight: 'bold',
  },
}));
const TopTen = ({ scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom className={classes.title} variant="h6">
        Top Ten
      </Typography>

      <Typography variant="body1">{scores.join(', ')}</Typography>
    </div>
  );
};
export default TopTen;
