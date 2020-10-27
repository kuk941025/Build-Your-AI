import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  btnRoot: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
  detailWrapper: {
    width: '100%',
  },
}));

const CustomAccordion = ({ expanded, onExapnd, onSubmit, title = '', summary = '', children }) => {
  const classes = useStyles();

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary onClick={onExapnd} expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{title}</Typography>
        <Typography className={classes.secondaryHeading}>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.detailWrapper}>
          {children}

          <div className={classes.btnRoot}>
            <Button onSubmit={onSubmit} color="primary" variant="contained">
              Apply
            </Button>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
