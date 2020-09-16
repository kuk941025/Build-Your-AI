import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { APP_MARGIN_LEFT, APP_HEIGHT } from '@/const/Layout';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  navigation: {
    flexGrow: 1,
    width: `calc(100% - ${APP_MARGIN_LEFT}px)`,
    display: 'flex',
    height: `${APP_HEIGHT}px`,
    position: 'fixed',
    top: 0,
    left: 'auto',
    right: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#fff',
    color: '#000',
  },
}));

const Navigation = ({ title = '' }) => {
  const classes = useStyles();
  return (
    <nav className={classes.navigation}>
      <AppBar className={classes.appBar} elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navigation;
