import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@/components/Accordion';
import OptionText from '@/components/OptionText';
import Button from '@material-ui/core/Button';
import defaultScores, { updateScores } from '@/configs/Scores';

const useStyles = makeStyles((theme) => ({
  optionRoot: {
    width: '100%',
  },
  btnRoot: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
}));
const Options = () => {
  const classes = useStyles();
  const [scores, setScores] = useState(defaultScores);
  const [expanded, setExpanded] = useState(true);

  const handleChange = (type) => (value) => {
    setScores({
      ...scores,
      [type]: Number(value),
    });
  };

  return (
    <div>
      <Accordion
        title="scores"
        summary="cutomize score based on stone states"
        expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}>
        <div className={classes.optionRoot}>
          {Object.keys(scores).map((type, idx) => (
            <OptionText handleChange={handleChange(type)} text={type} value={scores[type]} key={idx} />
          ))}

          <div className={classes.btnRoot}>
            <Button color="primary" onClick={() => updateScores(scores)} variant="contained">
              Apply
            </Button>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Options;
