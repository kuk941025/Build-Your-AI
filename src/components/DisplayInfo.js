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
  title: {
    fontWeight: 'bold',
  },
}));
const DisplayInfo = ({ data, names, title }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography gutterBottom className={classes.title} variant="h6">
        {title}
      </Typography>
      <div className={classes.infoWrapper}>
        {Object.keys(data).map((key, idx) => (
          <React.Fragment key={idx}>
            <Typography className={classes.text}>{names[key]}</Typography>
            <Typography className={classes.value}>{data[key]}</Typography>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DisplayInfo;
