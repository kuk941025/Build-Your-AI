import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@/components/Accordion';
import OptionText from '@/components/OptionText';
import defaultScores, { updateScores } from '@/configs/Scores';
import defaultGenetics, { updateGenetics, GENETIC_TYPES } from '@/configs/Genetics';

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
  const [genetics, setGenetics] = useState(defaultGenetics);
  const [expanded, setExpanded] = useState({
    option: false,
    genetics: false,
  });

  const handleScore = (type) => (value) => {
    setScores({
      ...scores,
      [type]: Number(value),
    });
  };
  const handleGenetics = (type) => (value) => {
    setGenetics({
      ...genetics,
      [type]: Number(value),
    });
  };

  const scoreOption = () =>
    Object.keys(scores).map((type, idx) => (
      <OptionText handleChange={handleScore(type)} text={type} value={scores[type]} key={idx} />
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
        expanded={expanded.genetics}
        onSubmit={() => updateGenetics(genetics)}
        onExapnd={() => setExpanded((prev) => ({ ...prev, genetics: !prev.genetics }))}>
        <div className={classes.optionRoot}>
          <OptionText
            handleChange={handleGenetics(GENETIC_TYPES.MUTATION_RATE)}
            text="Mutation Rate"
            value={genetics.MUTATION_RATE}
          />
          <OptionText
            handleChange={handleGenetics(GENETIC_TYPES.LIMIT_POPULATION)}
            text="Limit Population"
            value={genetics.LIMIT_POPULATION}
          />
        </div>
      </Accordion>
    </div>
  );
};

export default Options;
