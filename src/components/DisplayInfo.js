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
const DisplayInfo = ({info}) => {
  const { generation = 1, population = 1, bestScore = 1, avgScore = 1, mutationRate = 0.01, limit = 1000 } = info;
  const classes = useStyles();
  return (
    <div className={classes.infoWrapper}>
      <Typography className={classes.text}>generation</Typography>
      <Typography className={classes.value}>{generation}</Typography>
      <Typography className={classes.text}>population</Typography>
      <Typography className={classes.value}>{population}</Typography>
      <Typography className={classes.text}>Best Score</Typography>
      <Typography className={classes.value}>{bestScore}</Typography>
      <Typography className={classes.text}>Average Score</Typography>
      <Typography className={classes.value}>{avgScore}</Typography>
      <Typography className={classes.text}>Mutation Rate</Typography>
      <Typography className={classes.value}>{mutationRate}</Typography>
      <Typography className={classes.text}>Population limit</Typography>
      <Typography className={classes.value}>{limit}</Typography>
    </div>
  );
};

export default DisplayInfo;
