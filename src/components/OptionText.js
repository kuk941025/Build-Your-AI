import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  inputText: {
    flexBasis: '45%',
    flexShrink: 0,
    fontSize: '0.9rem',
    textAlign: 'left',
  },
  input: {
    flex: 1,
  },
}));
const OptionText = ({ text = '', value, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.inputText}>{text}</Typography>
      <TextField
        type="number"
        onChange={({ target: { value } }) => handleChange(value)}
        defaultValue={value}
        className={classes.input}
      />
    </div>
  );
};

export default OptionText;
