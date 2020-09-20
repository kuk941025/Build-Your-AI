import React from 'react';
import Navigation from './Navigation';
import SideBar from './SideBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { APP_HEIGHT } from '@/const/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
    padding: `${APP_HEIGHT + theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
}));

const GlobalLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation title="Build Your AI" />
      <SideBar />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default GlobalLayout;
