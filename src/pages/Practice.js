import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DisplayInfo from '@/components/DisplayInfo';
import TopTen from '@/components/TopTen';
import run from '@/genetics';
import Genetics from '@/configs/Genetics';

const createInitInfo = () => ({
  generation: 1,
  bestScore: 0,
  population: 0,
  avgScore: 0,
  mutationRate: Genetics.MUTATION_RATE,
  limit: Genetics.LIMIT_POPULATION, 
});

const useStyles = makeStyles(() => ({
  btnRoot: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const Practice = () => {
  const classes = useStyles();
  const [info, setInfo] = useState(createInitInfo());
  const [topTen, setTopTen] = useState([]);
  const handleRun = () => {
    const result = run();

    setTopTen(result.topTen);
    setInfo({
      ...info,
      generation: info.generation + 1,
      bestScore: result.maxFitness,
      population: result.population,
      avgScore: result.avgScore,
    });
  };
  return (
    <div>
      <DisplayInfo info={info} />
      <div className={classes.btnRoot}>
        <Button variant="contained" color="primary" onClick={handleRun}>
          Run
        </Button>
      </div>

      <TopTen data={topTen} />
    </div>
  );
};

export default Practice;
