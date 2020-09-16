import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { APP_HEIGHT } from '@/const/Layout';
import CSSBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  sideNameRoot: {
    height: `${APP_HEIGHT}px`,
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const SideBarName = ({ text = '' }) => {
  const classes = useStyles();
  return (
    <div className={classes.sideNameRoot}>
      <CSSBaseLine />
      <Typography>{text}</Typography>
    </div>
  );
};

export default SideBarName;
