import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  inputText: {
    flexBasis: '30%',
    flexShrink: 0,
  },
  input: {
    flex: 1,
  },
}));
const OptionText = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.inputText}>Text</Typography>
      <TextField className={classes.input} />
    </div>
  );
};

export default OptionText;
