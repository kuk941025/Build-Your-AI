import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { APP_MARGIN_LEFT } from '@/const/Layout';
import SideBarName from './SideBarName';
import SideList from './SideList';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    width: `${APP_MARGIN_LEFT}px`,
    minHeight: '100%',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  sideContent: {
    paddingTop: theme.spacing(1),
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <SideBarName text="Test" />
      <div className={classes.sideContent}>
        <SideList />
      </div>
    </div>
  );
};

export default SideBar;
