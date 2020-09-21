import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles(theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  }
}))

const SideList = () => {
  const classes = useStyles();

  return (
    <List>
      <ListItem className={classes.listItem} button>test</ListItem>
      <ListItem className={classes.listItem} button>test</ListItem>
      <ListItem className={classes.listItem} button>test</ListItem>
    </List>
  )
}

export default SideList
