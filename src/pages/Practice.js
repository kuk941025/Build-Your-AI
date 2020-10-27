import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DisplayInfo from '@/components/DisplayInfo';
import TopTen from '@/components/TopTen';
import run from '@/genetics';

const createInitInfo = (population = 1000, mutationRate = 0.05) => ({
  generation: 1,
  bestScore: 0,
  population,
  avgScore: 0,
  mutationRate,
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
    
    const topTen = result.fitnesses.sort((a, b) => b - a).slice(0, 10);
    setTopTen(topTen);

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

      <TopTen scores={topTen}/>
    </div>
  );
};

export default Practice;
