import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DisplayInfo from '@/components/DisplayInfo';
import TopTen from '@/components/TopTen';
import run, { reset, runUntil } from '@/genetics';
import Genetics from '@/configs/Genetics';

const useStyles = makeStyles((theme) => ({
  btnRoot: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: `0px ${theme.spacing(1)}px`,
  },
}));

const statsNames = {
  generation: 'Generation',
  population: 'Population',
  bestScore: 'Best Score',
  avgScore: 'Average Score',
};
const initStats = {
  generation: 1,
  population: 0,
  bestScore: 0,
  avgScore: 0,
};

const settingNames = {
  mutationRate: 'Mutation Rate',
  limit: 'Population Limit',
  initPopulation: 'Initial Population Size',
  maxDNA: 'Max. number of Stones',
};

const getInitSettings = () => ({
  mutationRate: Genetics.MUTATION_RATE,
  limit: Genetics.LIMIT_POPULATION,
  initPopulation: Genetics.INIT_POPULATION,
  maxDNA: Genetics.MAX_DNA_SIZE,
});

const Practice = () => {
  const classes = useStyles();
  const [stats, setStats] = useState(initStats);
  const [settings, setSettings] = useState(getInitSettings());
  const [topTen, setTopTen] = useState([]);

  const handleRun = () => {
    const result = run();

    setTopTen(result.topTen);
    setStats({
      generation: stats.generation + 1,
      bestScore: result.maxFitness,
      population: result.population,
      avgScore: result.avgScore,
    });
  };

  const handleRunUntil = () => {
    const result = runUntil();

    setTopTen(result.topTen);
    setStats({
      generation: result.generation,
      bestScore: result.maxFitness,
      population: result.population,
      avgScore: result.avgScore,
    });
    console.log(result.timeDiff)
  };

  const handleReset = () => {
    reset();
    setSettings(getInitSettings());
  };

  return (
    <div>
      <DisplayInfo title="Stats" names={statsNames} data={stats} />
      <DisplayInfo title="Settings" names={settingNames} data={settings} />
      <div className={classes.btnRoot}>
        <Button className={classes.button} variant="contained" onClick={handleReset}>
          Reset
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleRunUntil}>
          Run Until
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleRun}>
          Run
        </Button>
      </div>

      <TopTen data={topTen} />
    </div>
  );
};

export default Practice;
