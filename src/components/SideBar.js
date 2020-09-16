import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { APP_MARGIN_LEFT } from '@/const/Layout';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    width: `${APP_MARGIN_LEFT}px`,
    height: '100%',
  },
}));
const SideBar = () => {
  const classes = useStyles();
  return <div className={classes.sideBar}>test</div>;
};

export default SideBar;
