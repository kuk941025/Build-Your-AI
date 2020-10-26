import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const SideList = () => {
  const classes = useStyles();
  const history = useHistory();

  
  return (
    <List>
      <ListItem className={classes.listItem} button>
        Play
      </ListItem>
      <ListItem onClick={() => history.push('/o')} className={classes.listItem} button>
        Options
      </ListItem>
    </List>
  );
};

export default SideList;
