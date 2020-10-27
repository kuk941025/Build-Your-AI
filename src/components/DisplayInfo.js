import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  infoWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  text: {
    flexBasis: '30%',
    flexShrink: 0,
    padding: theme.spacing(1),
  },
  value: {
    flexBasis: '20%',
    flexShrink: 0,
    padding: theme.spacing(1),
  },
}));
const DisplayInfo = (props) => {
  const { generations = 1, populations = 1, best_score = 1, avg_score = 1, mutation_rate = 0.01 } = props;
  const classes = useStyles();
  return (
    <div className={classes.infoWrapper}>
      <Typography className={classes.text}>Generations</Typography>
      <Typography className={classes.value}>{generations}</Typography>
      <Typography className={classes.text}>Populations</Typography>
      <Typography className={classes.value}>{populations}</Typography>
      <Typography className={classes.text}>Best Score</Typography>
      <Typography className={classes.value}>{best_score}</Typography>
      <Typography className={classes.text}>Average Score</Typography>
      <Typography className={classes.value}>{avg_score}</Typography>
      <Typography className={classes.text}>Mutation Rate</Typography>
      <Typography className={classes.value}>{mutation_rate}</Typography>
    </div>
  );
};

export default DisplayInfo;
