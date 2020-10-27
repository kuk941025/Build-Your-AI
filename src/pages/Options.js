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
  const [expanded, setExpanded] = useState({
    option: false,
    genetics: false,
  });

  const handleChange = (type) => (value) => {
    setScores({
      ...scores,
      [type]: Number(value),
    });
  };

  const scoreOption = () =>
    Object.keys(scores).map((type, idx) => (
      <OptionText handleChange={handleChange(type)} text={type} value={scores[type]} key={idx} />
    ));

  return (
    <div>
      <Accordion
        title="scores"
        summary="customize score based on stone states"
        expanded={expanded.option}
        onSubmit={() => updateScores(scores)}
        onExapnd={() => setExpanded((prev) => ({ ...prev, option: !prev.option }))}>
        <div className={classes.optionRoot}>{scoreOption()}</div>
      </Accordion>

      <Accordion
        title="genetics"
        summary="customize genetic related options"
        onExapnd={() => setExpanded((prev) => ({ ...prev, genetics: !prev.genetics }))}
        expanded={expanded.genetics}>
        <div className={classes.optionRoot}>
          <OptionText text="Mutation Rate" value={0.05} />
          <OptionText text="Limit Population" value={10000} />
        </div>
      </Accordion>
    </div>
  );
};

export default Options;
